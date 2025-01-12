
# 2han N8N Committer

2han N8N Committer is an extension for [n8n](https://n8n.io/) designed to streamline your workflow management. This tool automates the process of committing changes made to your n8n workflows directly to a Git repository, ensuring version control and seamless collaboration.

---

## Features

- Automatically commit changes made to n8n workflows to a specified Git repository.
- Supports integration with self-hosted or cloud-based n8n instances.
- Maintains version control for workflow changes in Git.
- Simple setup and configuration for streamlined usage.

---

## Requirements

- A running instance of [n8n](https://n8n.io/).
- Access to a Git repository for storing committed workflows.
- Node.js environment (if running locally).
- Google Chrome browser for running the extension.

---

## Installation

### 1. Download the 2han N8N Committer Files
1. Clone this repository or download the files as a ZIP and extract them into a folder on your local machine.
   ```bash
   git clone https://github.com/2hanDigitalSolutions/2han-n8n-committer.git
   ```
2. Make sure the folder contains all necessary files, including:
   - Extension files for Chrome.
   - Workflow file (`2hanCommiterWorkflow.json`) for n8n.

---

### 2. Install the Chrome Extension in Developer Mode
1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer Mode** in the top-right corner of the page.
3. Click **Load unpacked** and select the folder where you extracted the extension files.
4. The extension will appear in the list, ready to use.

---

### 3. Import the Workflow into n8n
1. Log in to your n8n instance.
2. Go to **Workflows** and click **Import**.
3. Upload the file `2hanCommiterWorkflow.json` included in the repository.
4. Configure the workflow with the following details:
   - Git repository URL.
   - Authentication credentials for Git.
   - Any other specific parameters required for your setup.

---

### 4. Run the 2han N8N Committer
1. Make changes to your workflows in n8n.
2. Trigger the imported workflow to commit these changes automatically to your Git repository.
3. Confirm the updates by checking your Git repository.

---

## Usage

1. Ensure the extension is running in Chrome and the workflow is active in n8n.
2. Make changes to workflows in your n8n instance.
3. Use the extension to trigger automatic commits to your Git repository.
4. Verify version-controlled changes in your repository.

---

# Donate to the project.

#### Github Sponsors

https://github.com/sponsors/2hanDigitalSolutions

---


## License


2han N8N Committer is licensed under the Apache License 2.0, with the following additional conditions:

1. Restriction on Commercial Use
   The software may be used, copied, modified, and distributed freely, subject to the following restrictions:

   a. Prohibition of Commercial Use:
The Software may not be used, either in whole or in part, for commercial purposes, including but not limited to selling, licensing, or integrating into commercial products or services.

   b. Logo and Copyright Information:
In the process of using 2han N8N Committer’s frontend components, the LOGO or copyright information in the console or applications may not be removed or modified. This restriction does not apply to uses of 2han N8N Committer that do not involve its frontend components.

   c. Usage Notification Requirement:
If 2han N8N Committer is used as part of any project, including closed-source systems (e.g., proprietary software), the user is required to display a clear notification within the system that 2han N8N Committer is being utilized. This notification must be visible to system administrators and accessible from the system's documentation or settings page.

   d. Redistribution of Modifications:
Any modifications to the Software must retain this license and include a clear attribution to the original author(s), along with a link to the original repository or source, where applicable.


2. Contributor Agreement
   As a contributor, you agree to the following:

   a. The producer may adjust the open-source agreement to make it stricter or more relaxed as deemed necessary.

   b. Any code you contribute may be used for commercial purposes by the producer, including but not limited to its cloud business operations.


3. License Preservation
   The above copyright notice and these additional conditions must be included in all copies or substantial portions of the Software, including modified versions.


4. Warranty Disclaimer
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


5. Contact
   For licensing inquiries, please contact contato@2han.com.br

Apart from the specific conditions mentioned above, all other rights and restrictions follow the Apache License 2.0. Detailed information about the Apache License 2.0 can be found at http://www.apache.org/licenses/LICENSE-2.0.

© 2025 2han N8N Committer