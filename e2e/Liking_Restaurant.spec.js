Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
    I.seeElement("#restaurants");
    I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");
});

Scenario("like and unlike one resto", async({ I }) => {
    I.amOnPage("/");
    I.wait(3);

    I.seeElement(".post-item");
    I.click(locate(".post-item a").first());
    I.wait(3);

    I.seeElement("#likeButton");
    I.click("#likeButton");
    I.wait(3);

    I.amOnPage("/#/favorite");
    I.wait(3);

    I.seeElement(".post-item");
    I.click(locate(".post-item a").first());
    I.wait(3);

    I.seeElement("#likeButton");
    I.click("#likeButton");
    I.wait(3);

    I.amOnPage("/#/favorite");
    I.wait(3);

    I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");
});