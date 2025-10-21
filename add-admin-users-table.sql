-- ============================================
-- Add Admin Users Table
-- Run this in Supabase SQL Editor
-- ============================================

-- ADMIN USERS TABLE
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create Policies
CREATE POLICY "Admin users are viewable by everyone" ON admin_users FOR SELECT USING (true);
CREATE POLICY "Anyone can insert admin users" ON admin_users FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update admin users" ON admin_users FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete admin users" ON admin_users FOR DELETE USING (true);

-- Create Index
CREATE INDEX idx_admin_users_email ON admin_users(email);
CREATE INDEX idx_admin_users_created_at ON admin_users(created_at DESC);

-- Create Trigger
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user (password: teamunited2024)
-- Note: In production, use proper password hashing!
INSERT INTO admin_users (email, password, is_admin) 
VALUES ('admin@teamunited.org', 'teamunited2024', true);
