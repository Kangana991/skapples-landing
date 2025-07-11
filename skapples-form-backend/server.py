from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = FastAPI()

# CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use specific origin in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Setup Google Sheets credentials
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("credentials/skapples-credentials.json", scope)
client = gspread.authorize(creds)

# Open your Google Sheet by name (create it manually first)
sheet = client.open("Livo-Waitlist").sheet1

@app.post("/submit")
def submit_form(name: str = Form(...), email: str = Form(...), mobile: str = Form(...)):
    sheet.append_row([name, email, mobile])
    return {"status": "success", "message": "Data submitted!"}
