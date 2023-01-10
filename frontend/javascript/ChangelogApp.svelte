<script lang="ts">
  import ChangelogItem from "./ChangelogItem.svelte"
  import debounce from "./debounce"

  export let seed: ChangelogType[]

  let projects: Record<string, ChangelogType[]> = {}

  // group seed by projects
  $: projects = seed.reduce((acc, cur) => {
    if (!acc[cur.project]) {
      acc[cur.project] = []
    }
    acc[cur.project].push(cur)
    return acc
  }, {} as Record<string, ChangelogType[]>)

  let selectedProject: string | null = null

  let selectedProjectChangelog: ChangelogType[] = []
  let filteredItems: ChangelogType[] = []

  $: selectedProjectChangelog = selectedProject
    ? projects[selectedProject]
    : Object.values(projects)
        .flat()
        .sort((a, b) => new Date(b.date_merged).getTime() - new Date(a.date_merged).getTime())


  let gridStyle = "columns" as "columns" | "rows"

  let query = ""
  const filter = (query: string, projects: ChangelogType[]) => {
    if (query.length === 0) {
      filteredItems = projects
    }
    const regex = new RegExp(query, "i")
    filteredItems = projects.filter(
      (item) => item.message.match(regex) || item.author.match(regex)
    )
  }
  const debouncedFilter = debounce(filter, 500)
  $: {
    debouncedFilter(query, selectedProjectChangelog)
  }

</script>

<div>
  <nav>
    <ul class="menu rounded-box menu-horizontal max-w-full flex-wrap bg-base-100 p-2">
      <li>
        <button
          class={selectedProject === null ? "active" : ""}
          on:click={() => {
            selectedProject = null
          }}
        >
          All
        </button>
      </li>
      {#each Object.keys(projects) as project}
        <li>
          <button
            class={selectedProject === project ? "active" : ""}
            on:click={() => {
              selectedProject = project
            }}
          >
            {project}
            <div class="badge">{projects[project].length}</div>
          </button>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="mb-3 flex justify-end gap-2">
    <input type="text" placeholder="Search" bind:value={query} class="input input-bordered" />
    <button
      class="btn-ghost btn-sm btn"
      class:btn-active={gridStyle === "columns"}
      on:click={() => {
        gridStyle = "columns"
      }}
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3,3H11V5H3V3M13,3H21V5H13V3M3,7H11V9H3V7M13,7H21V9H13V7M3,11H11V13H3V11M13,11H21V13H13V11M3,15H11V17H3V15M13,15H21V17H13V15M3,19H11V21H3V19M13,19H21V21H13V19Z"
        />
      </svg>
    </button>
    <button
      class="btn-ghost btn-sm btn"
      class:btn-active={gridStyle === "rows"}
      on:click={() => {
        gridStyle = "rows"
      }}
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22 20V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20M4 6.5V4H20V6.5H4M4 11V8.5H20V11H4M4 15.5V13H20V15.5H4M4 20V17.5H20V20H4Z"
        />
      </svg>
    </button>
  </div>
  <div class="grid grid-cols-1 items-start gap-10" class:grid-cols-1={gridStyle == "rows"} class:lg:grid-cols-2={gridStyle == "columns"}>
    {#each filteredItems as changelog (changelog.sha + changelog.message + changelog.project)}
      <ChangelogItem {changelog} />
    {/each}
  </div>
</div>
