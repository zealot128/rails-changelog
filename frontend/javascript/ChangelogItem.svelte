<script lang="ts">
export let changelog: ChangelogType;

const prUrl = `https://github.com/rails/rails/issues/${changelog.pr}`;

// format date_merged as Date
const dateMerged = new Date(changelog.date_merged);
const formattedDate = dateMerged.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
})
</script>

<div class='card shadow-xl bg-base-200'>
  <div class='card-body'>
    <!-- output raw changelog.html -->
    <div class='prose overflow-x-auto inline-block flex-1'>
      {@html changelog.html}
    </div>
    <div class='flex flex-row gap-1 justify-between items-center'>
      <a href={prUrl} target='_blank' rel='noopener noreferrer' class='btn btn-primary btn-outline btn-sm'>
        PR
      </a>
      <span class='badge badge-neutral badge-md'>
        {changelog.project}
      </span>
      <i class="text-base-content/50 text-sm">{formattedDate}</i>
    </div>
  </div>
</div>

<style>
:global(.prose pre) {
  background-color: #1e1e1e;
  color: #d4d4d4;
}
</style>
