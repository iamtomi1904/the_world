ALTER TABLE mmorpg_characters ADD COLUMN map_layout INTEGER NOT NULL DEFAULT 5 CHECK (map_layout >= 5);
