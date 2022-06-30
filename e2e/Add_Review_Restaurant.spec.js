Feature("Add Review Restaurant");

Before(({ I }) => {
    I.amOnPage("/");
});

Scenario("Adding Review restaurant", async({ I }) => {
    const reviewText = "This is a test review";

    I.wait(5);

    I.seeElement(".post-item");
    I.wait(5);

    I.click(locate(".post-item a").first());
    I.wait(5);

    I.seeElement(".form-row");
    I.seeElement("#inputName");
    I.fillField("#inputName", "E2E review");
    I.wait(5);

    I.seeElement(".form-row");
    I.seeElement("#inputReview");
    I.fillField("#inputReview", reviewText);
    I.wait(5);

    I.seeElement("#submit-review");
    I.wait(5);
    I.click("#submit-review");
});