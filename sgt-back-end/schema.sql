SET
  client_min_messages TO warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
DROP schema "public" CASCADE;

CREATE schema "public";

CREATE TABLE "public"."grades" (
  "gradeId" serial,
  "name" text NOT NULL,
  "course" text NOT NULL,
  "score" integer NOT NULL,
  "createdAt" timestamptz(6) NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("gradeId")
);
