<script lang="ts">
    let error = $state(false);
    let success = $state(false);

    let name: string|undefined = $state()
    let email: string|undefined = $state()
    let message: string|undefined = $state()
    let check: number|undefined = $state()

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        if(check !== 4) {
            success = false;
            error = true;
            return
        }
        
        fetch('/api/v1/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            }),
        }).then((response) => {
            if(response.ok) {
                success = true;
                error = false;
            } else {
                success = false;
                error = true;
            }
        }).catch(() => {
            success = false;
            error = true;
        });
    }
</script>

<div class="my-4">
    <form onsubmit={handleSubmit}>
        <label class="block my-4">
            <span class="block text-sm font-bold ml-1 required">Name</span>
            <input class="dark:bg-gray-600" id=name name="name" placeholder="Enter your name" required bind:value={name} />
        </label>
        <label class="block my-4">
            <span class="block text-sm font-bold ml-1 required">E-mail</span>
            <input class="dark:bg-gray-600" id=email name="email" type="email" placeholder="Enter your e-mail" required bind:value={email} />
        </label>
        <div class="my-4">
          <label for=message class="block text-sm font-bold ml-1 required">Message</label>
          <textarea class="dark:bg-gray-600" rows="8" id=message name="message" placeholder="Enter your message" required bind:value={message}></textarea>
        </div>
        <label class="block my-4">
            <span class="block text-sm font-bold ml-1 required">2 + 2 = ?</span>
            <input class="dark:bg-gray-600" id=check name="check" type="number" placeholder="Answer" required bind:value={check} />
        </label>
        <div>
            <button class="float-right bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 p-2 px-3 mx-0.5 text-center rounded-md transition-colors duration-300 ease-in-out text-white" type="submit">Send</button>
            <div class="clear-both"></div>
        </div>
    </form>
    {#if error}<p>Message submission failed.</p>{/if}
    {#if success}<p>Message sent. Thank you.</p>{/if}
</div>
