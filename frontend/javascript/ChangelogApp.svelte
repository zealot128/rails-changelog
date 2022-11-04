<script lang="ts">
  import ChangelogItem from "./ChangelogItem.svelte"
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
  $: selectedProjectChangelog = selectedProject ? projects[selectedProject] : []
</script>

<div>
  <nav>
    <ul class="menu rounded-box menu-horizontal max-w-full flex-wrap bg-base-100 p-2">
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
  <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
    {#each selectedProjectChangelog as changelog}
      <ChangelogItem {changelog} />
    {/each}
  </div>
</div>
