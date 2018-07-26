USE burgers_db;

INSERT INTO burgers(burger_name, devoured)
	values("Other Burger", false),
        ("The Reubenator", true),
        ("The Dripper", true),
        ("Cheez Berg", false),
        ("Spicy Angus", true),
        ("Patty Melt", false),
        ("Cheesy Mistake", true),
        ("Gut Wrencher", true),
        ("Bum Bender", false),
        ("Greasenator", true)
;

SELECT * FROM burgers;