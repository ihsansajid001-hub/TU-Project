# Leaders Management Setup

## Database Setup

Run this SQL in your Supabase SQL Editor:

```sql
-- Copy content from add-leaders-table.sql
```

This creates the `leaders` table with:
- id (UUID)
- name (TEXT)
- role (TEXT)  
- image_url (TEXT)
- created_at, updated_at timestamps

## Admin Panel

A new "Leaders" tab has been added to the admin dashboard at `/admin`

### Features:
- ✅ Add new leaders with name, role, and image
- ✅ Edit existing leaders
- ✅ Delete leaders
- ✅ Upload images from device
- ✅ All data saves to Supabase

## Frontend Display

The Leaders section on the homepage now fetches data from Supabase automatically.

## How to Use:

1. Run `add-leaders-table.sql` in Supabase SQL Editor
2. Go to `/admin` and login
3. Click on "Leaders" tab
4. Click "Add Leader"
5. Fill in name, role, and upload image
6. Click "Save"
7. Leaders will appear on the homepage automatically!
