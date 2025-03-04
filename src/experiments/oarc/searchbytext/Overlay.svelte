<!--
  (c) 2024 Open AR Cloud
  This code is licensed under MIT license (see LICENSE for details)
-->

<!--
    Content of the experiment overlay.
-->

<script>
    let inputText = "";
    import { createEventDispatcher } from 'svelte';
    import { experimentModeSettings } from '@src/stateStore';

    // Used to dispatch events to parent
    const dispatch = createEventDispatcher();
    function sendText() {
    dispatch("textInput", inputText); // Send event to parent
  }

</script>

{#if $experimentModeSettings?.searchbytext.showstats}
    {#if $experimentModeSettings.searchbytext.localisation}
        <button class="secondary" on:click={() => dispatch('relocalize')}>
            <img src="/media/refresh.svg" alt="refresh icon" />
        </button>
        <input type="text" bind:value={inputText} placeholder="Type something..." />
        <button on:click={sendText}>Search nearby</button>
    {/if}
{/if}

<style>
    button {
        height: var(--button-height);
    }
    .prime {
        width: 200px;
    }
    .secondary {
        width: 50px;
    }
    .secondary img {
        width: 20px;
    }
</style>
