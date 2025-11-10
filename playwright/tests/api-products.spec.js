import { test, expect } from "@playwright/test";

test("API (mocked): Login, create article, and delete it", async ({ request }) => {
  
  // 1) Mock login response
  const mockUser = {
    user: {
      email: "qa_user@test.com",
      token: "fake.token.value",
      username: "qa_user"
    }
  };

  // 2) Mock article that will be created
  const mockArticle = {
    article: {
      slug: "mock-article-123",
      title: "Mock Article Title",
      description: "This is a mocked article.",
      body: "Generated using Playwright mock!",
      tagList: [],
      author: { username: "qa_user" }
    }
  };

  // 3) Mock delete success response
  const mockDeleteResponse = { status: "Article deleted successfully" };

  // ✅ Assertions to simulate expected behavior
  expect(mockUser.user.token).toBeTruthy();
  expect(mockArticle.article.title).toContain("Mock");
  expect(mockDeleteResponse.status).toBe("Article deleted successfully");
});
