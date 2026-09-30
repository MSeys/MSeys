<a href="https://matthiasseys.com"><img src="./profile-header.svg" alt="Matthias Seys — Software, SDET and Platform. Building the tools behind better software." width="100%" /></a>

<p align="center">
  <a href="https://dev.matthiasseys.com">Developer portfolio</a> &nbsp;·&nbsp;
  <a href="https://prototest.dev">ProtoTest</a> &nbsp;·&nbsp;
  <a href="https://photos.matthiasseys.com">Photography</a>
</p>

Hi, I’m Matthias — a software, SDET and platform engineer from Belgium.

I like building the things that help other developers work: tools, test infrastructure and shared foundations. My background spans C++ engine projects, .NET development, test automation and platform engineering.

> For every problem, there’s a solution. If there are none… create one.

## Building now

<a href="https://prototest.dev"><img src="./prototest.svg" alt="ProtoTest — Test the whole journey. Trace every layer. Composable integration testing for .NET." width="100%" /></a>

**[ProtoTest](https://prototest.dev)** brings the setup around an integration test into one place. APIs, databases, messaging, browsers and generated files share the same test context, lifecycle and cleanup.

**[ProtoTrace](https://trace.prototest.dev/?demo=1)** keeps the setup, requests, checks and teardown together, so a failure comes with the story of what happened.

[Source](https://github.com/MSeys/ProtoTest) · [Get started](https://prototest.dev/docs/getting-started/installation) · [NuGet](https://www.nuget.org/packages?q=ProtoTest) · [Explore a sample trace](https://trace.prototest.dev/?demo=1)

<details>
<summary><strong>See ProtoTest in action — REST meets GraphQL</strong></summary>

This example creates a project through REST and checks the collection through GraphQL. `SignedInAs` is application-specific setup; both clients use the same test context.

```csharp
[ProtoTest]
[SignedInAs]
public async Task RestWritesAreVisibleThroughGraphQL()
{
    using var created = await Proto.Context.Rest()
        .Body(new CreateProjectRequest("atlas"))
        .PostAsync("/api/v1/projects");

    created.Should.HaveHttpStatus(HttpStatusCode.Created);

    using var projects = await Proto.Context.GraphQL()
        .Query("projects", new { first = 10 })
        .ExpectAsync(new { totalCount = 1 });

    projects.Should.HaveNoErrors();
}
```

[See the documentation for setup and complete examples.](https://prototest.dev/docs/recipes/overview)

</details>

## Things I’ve built

Some earlier projects — different platforms, the same interest in how things work underneath.

<a href="https://github.com/MSeys/ProtoEngine"><img src="./protoengine.svg" alt="ProtoEngine — Exploring engine foundations through an earlier C++ project. Open repository." width="100%" /></a>

<a href="https://github.com/MSeys/sol2_ImGui_Bindings"><img src="./sol2-imgui.svg" alt="sol2 ImGui Bindings — Connecting Lua and Dear ImGui through sol2 bindings. Open repository." width="100%" /></a>

<a href="https://github.com/MSeys/PSV_2DCore"><img src="./psv-2d-core.svg" alt="PSV 2D Core — An event-based 2D framework for PlayStation Vita apps and games. Open repository." width="100%" /></a>

Also: **[Gameboy Tetris System](https://github.com/MSeys/GameboyTetrisSystem)** — a Tetris-playing system that only uses the Game Boy’s virtual screen and buttons.

[Explore the rest of my portfolio →](https://dev.matthiasseys.com/#project)

## Beyond code

<a href="https://photos.matthiasseys.com"><img src="./photography.svg" alt="Away from the keyboard — A different kind of focus. Photography, light and stories. Open gallery." width="100%" /></a>

I also enjoy telling stories through photography. **[Visit my gallery →](https://photos.matthiasseys.com)**
