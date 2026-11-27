import { NextResponse } from "next/server";
import { google } from "googleapis";
import {
  createTestOrderRow,
  ORDER_HEADERS,
  quoteSheetRange,
  testLeadSchema,
} from "@/lib/shopTestOrder";

export const runtime = "nodejs";

function isServiceAccountCredentials(
  value: unknown
): value is { client_email: string; private_key: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "client_email" in value &&
    typeof value.client_email === "string" &&
    "private_key" in value &&
    typeof value.private_key === "string"
  );
}

export async function POST(request: Request) {
  let requestBody: unknown;
  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_lead_data" }, { status: 400 });
  }

  const parsedLead = testLeadSchema.safeParse(requestBody);
  if (!parsedLead.success) {
    return NextResponse.json({ error: "invalid_lead_data" }, { status: 400 });
  }

  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetTab = process.env.GOOGLE_SHEETS_ORDERS_TAB;

  if (!serviceAccountJson || !spreadsheetId || !sheetTab) {
    return NextResponse.json(
      { error: "google_sheets_config_missing" },
      { status: 503 }
    );
  }

  let credentials: unknown;
  try {
    credentials = JSON.parse(serviceAccountJson);
  } catch {
    console.error("GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON.");
    return NextResponse.json(
      { error: "google_sheets_config_missing" },
      { status: 503 }
    );
  }

  if (!isServiceAccountCredentials(credentials)) {
    console.error("Google service account JSON is missing required fields.");
    return NextResponse.json(
      { error: "google_sheets_config_missing" },
      { status: 503 }
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const headerRange = quoteSheetRange(sheetTab, "A1:M1");

  try {
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange,
      valueRenderOption: "UNFORMATTED_VALUE",
    });
    const headers = headerResponse.data.values?.[0] ?? [];
    if (
      headers.length !== ORDER_HEADERS.length ||
      ORDER_HEADERS.some((header, index) => headers[index] !== header)
    ) {
      return NextResponse.json(
        { error: "sheet_headers_mismatch" },
        { status: 409 }
      );
    }

    const now = Date.now();
    const orderId = `TEST-${now}`;
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: quoteSheetRange(sheetTab, "A:M"),
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          createTestOrderRow(
            orderId,
            new URL("/shop/test", request.url).toString(),
            new Date(now),
            parsedLead.data
          ),
        ],
      },
    });

    if (!appendResponse.data.updates?.updatedRows) {
      console.error("Google Sheets test append completed without adding a row.");
      return NextResponse.json(
        { error: "google_sheets_write_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, orderId });
  } catch (error) {
    console.error(
      "Google Sheets test failed:",
      error instanceof Error ? error.message : "Unknown Google Sheets error"
    );
    return NextResponse.json(
      { error: "google_sheets_write_failed" },
      { status: 502 }
    );
  }
}
