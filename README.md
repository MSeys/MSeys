<p align="center">
  <a href="https://matthiasseys.com">
    <img src="./profile-header.svg" alt="Matthias Seys — Software, SDET and Platform Engineer" width="100%" />
  </a>
</p>

<p align="center">
  <a href="https://dev.matthiasseys.com">Developer portfolio</a>
  &nbsp;·&nbsp;
  <a href="https://prototest.dev">ProtoTest</a>
  &nbsp;·&nbsp;
  <a href="https://trace.prototest.dev/?demo=1">Live trace</a>
  &nbsp;·&nbsp;
  <a href="https://photos.matthiasseys.com">Photography</a>
</p>

I’m a software, SDET and platform engineer from Belgium. I build the tooling, test infrastructure and foundations that make complex systems easier to understand, verify and ship.

My work tends to live one layer beneath the product: shared lifecycle, reliable automation, developer experience, observability and the tools that help other engineers move with confidence.

## Current build: ProtoTest

[ProtoTest](https://prototest.dev) is a composable integration-testing foundation for .NET. A test can call an API, wait for an event, inspect a database, drive a browser or verify a generated file while every integration shares the same context, lifecycle, cleanup and trace.

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

<p>
  <a href="https://github.com/MSeys/ProtoTest"><strong>Source</strong></a>
  &nbsp;·&nbsp;
  <a href="https://prototest.dev/docs/getting-started/installation"><strong>Get started</strong></a>
  &nbsp;·&nbsp;
  <a href="https://www.nuget.org/packages?q=ProtoTest"><strong>NuGet</strong></a>
  &nbsp;·&nbsp;
  <a href="https://trace.prototest.dev/?demo=1"><strong>Open a sample trace</strong></a>
</p>

<p align="center">
  <img src="./project-map.svg" alt="From engine projects and developer tools to test infrastructure and ProtoTest" width="100%" />
</p>

## Selected systems

| Project | What it explores |
| --- | --- |
| [ProtoTest](https://github.com/MSeys/ProtoTest) | Composable .NET integration testing across APIs, databases, messaging, browsers and generated files. |
| [sol2 ImGui Bindings](https://github.com/MSeys/sol2_ImGui_Bindings) | Lua bindings for Dear ImGui through sol2 — a small tool that became useful well beyond its original project. |
| [PSV 2D Core](https://github.com/MSeys/PSV_2DCore) | An event-based 2D framework for PlayStation Vita apps and games. |
| [Gameboy Tetris System](https://github.com/MSeys/GameboyTetrisSystem) | A Tetris-playing system limited to the Game Boy’s virtual screen and buttons. |
| [ProtoEngine](https://github.com/MSeys/ProtoEngine) | An earlier C++ engine project and part of the path toward building foundations instead of only features. |

## The kind of work I care about

- **Developer tooling** that removes repeated friction instead of documenting around it.
- **Test infrastructure** that keeps setup readable, cleanup deterministic and parallel execution isolated.
- **Observability** that explains a failure as a journey, not just a final exception.
- **Platform foundations** that are pleasant to extend and difficult to misuse.

> For every problem, there’s a solution. If there are none… create one.

<sub>When I’m away from code, I’m usually looking for a story through a camera lens.</sub>
