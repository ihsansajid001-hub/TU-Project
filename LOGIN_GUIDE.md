# Admin Login System - How It Works

## Authentication Flow

The login system now checks credentials in this order:

1. **Database First**: Checks `admin_users` table in Supabase
2. **Fallback**: Uses environment variables (admin/teamunited2024)

## How to Login

### With Database User:
1. Go to `/admin`
2. Enter the email you created in Settings
3. Enter the password you set
4. Click "Login"

### With Default Credentials:
- Email/Username: `admin`
- Password: `teamunited2024`

## Creating New Admin Users

1. Login with default credentials
2. Go to "Settings" tab
3. Click "Add Admin User"
4. Enter:
   - Email (e.g., john@example.com)
   - Password (e.g., mypassword123)
   - Check "Admin Access"
5. Click "Save"
6. Logout and login with the new credentials!

## Testing

### Test New User:
1. Create user: test@example.com / test123
2. Logout
3. Login with: test@example.com / test123
4. Should work! ✅

## Features

- ✅ Database authentication
- ✅ Fallback to default credentials
- ✅ Show/hide password
- ✅ Loading state during login
- ✅ Error messages
- ✅ Remember me checkbox
- ✅ Forgot password link

## Security Notes

⚠️ **Current Implementation**: Passwords are stored in plain text
⚠️ **For Production**: Use proper password hashing (bcrypt, argon2)

## Troubleshooting

**Can't login with new user?**
1. Make sure you ran `add-admin-users-table.sql`
2. Check the email is correct (case-sensitive)
3. Check the password is correct
4. Try default credentials: admin / teamunited2024

**Still not working?**
- Check browser console for errors
- Verify Supabase connection
- Check if admin_users table exists
