# Team United - Admin Panel

## Access Admin Panel

Navigate to: `http://localhost:5173/admin`

## Default Credentials

- **Username:** `admin`
- **Password:** `teamunited2024`

## Features

### 1. Projects Management
- ✅ Add new projects
- ✅ Edit existing projects
- ✅ Delete projects
- ✅ Manage project details:
  - Title, Description
  - Category (Education, Environment, Charity, Technology)
  - Status (Active, Completed, Upcoming)
  - Location, Date
  - Image URL
  - Impact metrics (Beneficiaries, Volunteers, Funds Raised)

### 2. Gallery Management
- ✅ Add new gallery items
- ✅ Edit existing gallery items
- ✅ Delete gallery items
- ✅ Manage gallery details:
  - Title, Description
  - Category
  - Location, Date
  - Image URL

### 3. Stories Management
- ✅ Add new stories
- ✅ Edit existing stories
- ✅ Delete stories
- ✅ Manage story details:
  - Name, Role, Location
  - Story content
  - Impact description
  - Rating (1-5 stars)
  - Image URL
  - Date

## How to Use

1. **Login:** Navigate to `/admin` and enter credentials
2. **Select Tab:** Choose between Projects, Gallery, or Stories
3. **Add New:** Click the "Add" button to create new content
4. **Edit:** Click the edit icon on any item to modify it
5. **Delete:** Click the delete icon to remove an item (with confirmation)
6. **Logout:** Click the logout button in the header

## Security Notes

⚠️ **Important:** This is a basic authentication system for demonstration purposes.

For production use, you should:
- Implement proper backend authentication with JWT tokens
- Use environment variables for credentials
- Add role-based access control
- Implement API endpoints for data persistence
- Add input validation and sanitization
- Use HTTPS for all admin operations

## Data Persistence

Currently, data is stored in component state and will reset on page refresh. To persist data:

1. Connect to a backend API (Firebase, Supabase, custom backend)
2. Replace localStorage with proper database calls
3. Implement proper CRUD operations with API endpoints

## Customization

To change admin credentials, edit `components/Admin.tsx`:

```typescript
if (username === 'YOUR_USERNAME' && password === 'YOUR_PASSWORD') {
  // Login logic
}
```

## Future Enhancements

- [ ] Image upload functionality
- [ ] Bulk operations
- [ ] Search and filter
- [ ] Analytics dashboard
- [ ] User management
- [ ] Activity logs
- [ ] Export data functionality
