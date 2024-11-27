
# Happy Hacking Space - Article Hub

## Prepare repository
 - **Create a New Repository**:
 
 - **Organize Markdown Files by Category**:
    - Create folders in the repository to represent categories, e.g., 
 - **IoT**
	- Smart Home Automation
	- Industrial IoT
	- ...
 - **Ethical Hacking**
	- Network Security
	 - Web Application Security
	 - ...
 - **Programming**
	- Web Development
	- System Programming
	- ...

##  Sync GitHub with GitBook

- **Set Up a GitBook.io Account**:
    - If you don’t have one, create an account at [GitBook.io](https://www.gitbook.com/).
- **Create a New GitBook Space**:
    - In GitBook, create a space for your articles.
- **Link GitHub to GitBook**:
    - In the GitBook space:
        - Navigate to the **Settings**.
        - Under **Integrations**, choose **GitHub Sync**.
        - Select your repository and link it to the space.
    - Now, GitBook will automatically pull content from your repository.
- **Organize Content by Category**:
    - GitBook should automatically create sections based on your folder structure in the repository.

### Finally we have gitbook.io link: `hhs.gitbook.io`

## Automate Posts to Daily.dev
Currently, **daily.dev** doesn't support direct API-based submissions. Instead, you'll need to:

1. **Set Up RSS Feed for GitHub or GitBook**:
    - If you're using GitBook, it automatically generates an RSS feed. Find it at:
    
```
https://hhs.gitbook.io/rss.xml
```

- For GitHub, you might need to manually create an RSS feed from your repository using tools like `rss-generator` or a custom script.
- **Integrate RSS Feed with daily.dev**:
    
    - Go to your **daily.dev** account settings.
    - Add the RSS feed URL under the **Content Sources** section.

## Automate Workflow with GitHub Actions

Use **GitHub Actions** to automate article uploads and notifications.
1. **Create a GitHub Workflow**:

    - In your repository, create a `.github/workflows/publish.yml` file:
      
```
name: Publish Articles

on:
  push:
    branches:
      - main

jobs:
  sync_gitbook:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Sync with GitBook
        run: |
          echo "GitBook sync triggered"

```

-  **Note:** Replace the `run` sections with proper integration logic once APIs or additional tools are available.
    
- **Commit and Push**:
    - Once you save the workflow, commit and push it to your repository. GitHub Actions will automatically trigger on every push to the `main` branch.
