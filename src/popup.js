document.addEventListener('DOMContentLoaded', async () => {
  const workflowInfo = document.getElementById('workflowInfo');
  const commitMessage = document.getElementById('commitMessage');
  const commitBtn = document.getElementById('commitBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  const status = document.getElementById('status');

  // Get current tab URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;
  
  // Extract workflow ID from URL
  const workflowId = url.split('/workflow/').pop().split('/')[0];

  if (!workflowId) {
    workflowInfo.innerHTML = '<div class="error">No workflow ID found in URL</div>';
    return;
  }

  workflowInfo.textContent = `Workflow ID: ${workflowId}`;

  // Settings button handler
  settingsBtn.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });

  commitBtn.addEventListener('click', async () => {
    const settings = await chrome.storage.sync.get(['apiKey', 'n8nDomain', 'repository', 'owner']);
    
    if (!settings.apiKey || !settings.n8nDomain || !settings.repository || !settings.owner) {
      status.innerHTML = '<div class="error">Please configure settings first</div>';
      return;
    }

    if (!client.value) {
      status.innerHTML = '<div class="error">Please enter a client name</div>';
      return;
    }

    if (!commitMessage.value) {
      status.innerHTML = '<div class="error">Please enter a commit message</div>';
      return;
    }
    const webhookURL = `${settings.n8nDomain}/webhook/2hanN8N-Committer`
    const apikey = `Bearer ${settings.apiKey}`

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${apikey}`
        },
        body: JSON.stringify({
          repository: settings.repository,
          owner: settings.owner,
          id: workflowId,
          commit: commitMessage.value,
          client: client.value
        })
      });

      if (!response.ok) throw new Error('Failed to create commit');
      
      status.textContent = 'Commit created successfully!';
      status.style.color = 'green';
      
      setTimeout(() => {
        window.close();
      }, 2000);
    } catch (error) {
      status.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
  });
});