INSERT INTO user 
    (username, password)
VALUES
    ('luther', 'luther123'),
    ('diego', 'diego123'),
    ('allison', 'allison123'),
    ('klaus', 'klaus123'),
    ('five', 'five123'),
    ('ben', 'ben123'),
    ('vanya', 'vanya123');

INSERT INTO post 
    (title, content, user_id, created_at, updated_at)
VALUES
    ('Number One', "Luther's principal powers are super-strength and durability.", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Number Two', "Diego is the reckless and rebellious member of the group. He has also demonstrated a strong talent for knife-throwing.", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Number Three', "Allison has the ability to manipulate reality by lying. She uses the phrase 'I heard a rumour...' to activate the effect", 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Number Four', "Klaus' powers are speaking with the dead, channeling the dead so they’re speaking through him, possessing people, broadcasting his consciousness through airwaves (allowing him to communicate through TVs), and telekinesis.", 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Number Five', "Five has power of time travel.", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Number Six', "Ben possesses monsters from other dimensions under his skin (most often appearing as tentacles emerging from his torso).", 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Number Seven', "Vanya is capable of releasing destructive waves of force using her violin that can be strong enough to cut someone's throat or destroy an entire building with a single note.", 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

    INSERT INTO comment
        (comment_text, user_id, post_id, created_at, updated_at)
    VALUES
        ('this is a comment', 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('this is a comment', 2, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('this is a comment', 3, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('this is a comment', 4, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('this is a comment', 5, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('this is a comment', 6, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('this is a comment', 7, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
    
    
