-- ============================================
-- Update RLS Policies for Team United
-- Run this in Supabase SQL Editor
-- ============================================

-- DROP OLD POLICIES FOR PROJECTS
DROP POLICY IF EXISTS "Projects are viewable by everyone" ON projects;
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;

-- CREATE NEW POLICIES FOR PROJECTS
CREATE POLICY "Projects are viewable by everyone" ON projects FOR SELECT USING (true);
CREATE POLICY "Anyone can insert projects" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update projects" ON projects FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete projects" ON projects FOR DELETE USING (true);

-- DROP OLD POLICIES FOR GALLERY
DROP POLICY IF EXISTS "Gallery items are viewable by everyone" ON gallery;
DROP POLICY IF EXISTS "Authenticated users can insert gallery items" ON gallery;
DROP POLICY IF EXISTS "Authenticated users can update gallery items" ON gallery;
DROP POLICY IF EXISTS "Authenticated users can delete gallery items" ON gallery;

-- CREATE NEW POLICIES FOR GALLERY
CREATE POLICY "Gallery items are viewable by everyone" ON gallery FOR SELECT USING (true);
CREATE POLICY "Anyone can insert gallery items" ON gallery FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update gallery items" ON gallery FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete gallery items" ON gallery FOR DELETE USING (true);

-- DROP OLD POLICIES FOR STORIES
DROP POLICY IF EXISTS "Stories are viewable by everyone" ON stories;
DROP POLICY IF EXISTS "Authenticated users can insert stories" ON stories;
DROP POLICY IF EXISTS "Authenticated users can update stories" ON stories;
DROP POLICY IF EXISTS "Authenticated users can delete stories" ON stories;

-- CREATE NEW POLICIES FOR STORIES
CREATE POLICY "Stories are viewable by everyone" ON stories FOR SELECT USING (true);
CREATE POLICY "Anyone can insert stories" ON stories FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update stories" ON stories FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete stories" ON stories FOR DELETE USING (true);
