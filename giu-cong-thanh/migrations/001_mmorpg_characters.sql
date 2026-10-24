CREATE TABLE mmorpg_characters (
 id UUID PRIMARY KEY,
 account_id TEXT NOT NULL UNIQUE REFERENCES accounts(id) ON DELETE CASCADE,
 name VARCHAR(18) NOT NULL,
 race TEXT NOT NULL CHECK(race IN ('human','elf','dwarf')),
 level SMALLINT NOT NULL DEFAULT 1 CHECK(level BETWEEN 1 AND 60),
 experience BIGINT NOT NULL DEFAULT 0 CHECK(experience >= 0),
 profession TEXT,
 map_id TEXT NOT NULL DEFAULT 'world' CHECK(map_id IN ('world','DG','ECO1','ECO2')),
 position_x DOUBLE PRECISION NOT NULL CHECK(position_x >= 0 AND position_x < 10000),
 position_y DOUBLE PRECISION NOT NULL CHECK(position_y >= 0 AND position_y < 10000),
 return_x DOUBLE PRECISION,
 return_y DOUBLE PRECISION,
 revision BIGINT NOT NULL DEFAULT 0,
 control_hash CHAR(64),
 created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT mmorpg_return_pair CHECK((return_x IS NULL) = (return_y IS NULL))
);
