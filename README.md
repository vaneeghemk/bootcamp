# Edge Delivery Services Partner Bootcamp
Brussels, June 19 2025 and Amsterdam, July 3 2025

## Environments
- Preview: https://main--{repo}--{owner}.aem.page/
- Live: https://main--{repo}--{owner}.aem.live/

## Documentation

Before using this code, we recommend you to familiarize yourself with the [Developer Tutorial](https://www.aem.live/developer/tutorial). Additionally you can find a lot more information on the following pages:

1. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
1. [Web Performance](https://www.aem.live/developer/keeping-it-100)
1. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## Exercises

For the context of this website, we'll start a simple news website in Edge Delivery Services. The code you write can be used regardless of if you WYSIWYG authoring or Document-based authoring. For simplicity's sake, we recommend document-based authoring. If you need inspiration of where to get your news from, you can always check the [Adobe News website](https://news.adobe.com).

The solutions of both the `contact` and `news-list` components can be found in this repo. The content has been shared separately.

### Simple block

Create a contact block, so that the contact details at the bottom of the page can be visualized in a unified and stylized way.

<img width="469" alt="image" src="https://github.com/user-attachments/assets/c8f16a46-8cc5-4948-8e0b-c6404fdd5762" />

Suggested steps to develop this block:

1. Create the content markup in your content source
    - For Document-Based Authoring, create a table with the name of your block at the top. Then, decide how you want your component to be authored, for example a column to the left with the image and three columns to the right with the name, title and e-mail address.
    <img width="642" alt="image" src="https://github.com/user-attachments/assets/f60ce7be-e5bc-4684-b73a-fa6978afe7dc" />

    - For WYSIWYG authoring, edit the `component-definition.json`, `component-models.json` and `component-filters.json` files to properly reflect which properties your block should have.
   <img width="292" alt="image" src="https://github.com/user-attachments/assets/b632ba70-4dca-43a9-9269-87b1c3975eb6" />
1. Preview your changes. You should see that Edge Delivery Services automagically foresees markup for the content you authored.
1. Create the block in your codebase by foreseeing a folder with the name of your block under the `blocks` root. Then create a JS and CSS file with the same name of your block under it.
1. Create the decorate method. This method gets the semantic HTML that is a result of the markup we foresaw in step 2 as a parameter and transforms it with JS to get to the desired DOM structure.
   ```js
   export default function decorate(block) {
   }
   ```
1. Style the component by adding the necessary CSS in the corresponding CSS file.

### Advanced block

Create a latest new block, that automatically fetches the latest news and shows the authored number of articles. 

<img width="252" alt="image" src="https://github.com/user-attachments/assets/125c4e04-5f1d-4bb2-ae65-8121441f8469" />

1. Follow the steps of the previous exercise to set up the markup for the content, and create the block code.
1. Create a spreadsheet called `query-index`. In it, name the main tab `raw_index`. More detailed info can be found on the [Indexing documentation page](https://www.aem.live/developer/indexing). Foresee a header row in which you indicate the fields you want to be indexed, e.g. `path`, `title`, ...
    <img width="658" alt="image" src="https://github.com/user-attachments/assets/c251e1c8-1574-4175-a816-08345b837ffc" />
1. Preview the file using the sidekick and publish it. This will activate your index. Any document you now publish will be added to this index. It is accessible as well via API on `https://main--{repo}--{owner}.aem.page/query-index.json`.
1. When we now want to add an index specifically for our news, we will have to add some code. Check out the `helix-query.yaml` file in this repo.
1. Then, you can use this index to pull in the latest news articles and display them.
