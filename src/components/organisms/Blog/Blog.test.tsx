import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { postsMock } from "../../../mock/postsMock";
import { postsUrl } from "../../../services/WpApiClient";
import { Blog } from "./Blog";

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get(postsUrl, (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(postsMock));
  })
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test("renders blog with three posts", async () => {
  render(<Blog />);

  const title1 = await screen.findByText(
    "Travel, CLIs, and sticky notes: Lilyana’s life as a Canonical UX designer"
  );

  const title2 = await screen.findByText(
    "Kubernetes 1.19 available from Canonical"
  );

  const title3 = await screen.findByText("Kubeflow 1.1 is out!");

  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
  expect(title3).toBeInTheDocument();
});
