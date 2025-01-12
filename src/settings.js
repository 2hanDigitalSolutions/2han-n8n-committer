document.addEventListener('DOMContentLoaded', async () => {
  const n8nDomain = document.getElementById('n8nDomain');
  const repository = document.getElementById('repository');
  const owner = document.getElementById('owner');
  const apiKey = document.getElementById('apiKey');
  const saveBtn = document.getElementById('saveBtn');
  const status = document.getElementById('status');

  // Load saved settings
  const settings = await chrome.storage.sync.get(['apiKey', 'n8nDomain', 'repository', 'owner']);
  if (settings.n8nDomain) n8nDomain.value = settings.n8nDomain;
  if (settings.repository) repository.value = settings.repository;
  if (settings.owner) owner.value = settings.owner;
  if (settings.apiKey) apiKey.value = settings.apiKey;

  saveBtn.addEventListener('click', async () => {
    if (!n8nDomain.value || !repository.value || !owner.value || !apiKey.value) {
      status.textContent = 'Please fill in all fields';
      status.className = 'status error';
      return;
    }

    try {
      await chrome.storage.sync.set({
        n8nDomain: n8nDomain.value,
        repository: repository.value,
        owner: owner.value,
        apiKey: apiKey.value
      });

      status.textContent = 'Settings saved successfully!';
      status.className = 'status success';
    } catch (error) {
      status.textContent = `Error saving settings: ${error.message}`;
      status.className = 'status error';
    }
  });
});