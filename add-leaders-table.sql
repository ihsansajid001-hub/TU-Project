-- ============================================
-- Add Leaders Table
-- Run this in Supabase SQL Editor
-- ============================================

-- LEADERS TABLE
CREATE TABLE leaders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE leaders ENABLE ROW LEVEL SECURITY;

-- Create Policies
CREATE POLICY "Leaders are viewable by everyone" ON leaders FOR SELECT USING (true);
CREATE POLICY "Anyone can insert leaders" ON leaders FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update leaders" ON leaders FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete leaders" ON leaders FOR DELETE USING (true);

-- Create Index
CREATE INDEX idx_leaders_created_at ON leaders(created_at DESC);

-- Create Trigger
CREATE TRIGGER update_leaders_updated_at BEFORE UPDATE ON leaders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
