import ffetch from '../../scripts/ffetch.js';
import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Fetches news data from the news index
 * @returns {Promise<Array>} The news data
 */
async function fetchNews() {
  try {
    const news = await ffetch('/news-index.json').all();
    return news || [];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error loading news:', error);
    return [];
  }
}

/**
 * Creates an newsItem list item element
 * @param {Object} newsItem The newsItem data
 * @returns {HTMLElement} The newsItem list item
 */
function createNewsElement(newsItem) {
  const li = document.createElement('li');

  // add the newsItem image
  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('news-item--image');
  const img = createOptimizedPicture(newsItem.image, newsItem.title);
  imgWrapper.append(img);
  li.append(imgWrapper);

  // add the newsItem title and description
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('news-item--content');
  const title = document.createElement('h3');

  const link = document.createElement('a');
  link.href = newsItem.path;
  link.textContent = newsItem.title;
  title.append(link);
  contentWrapper.append(title);
  if (newsItem.description) {
    const desc = document.createElement('p');
    desc.textContent = newsItem.description;
    contentWrapper.append(desc);
  }
  li.append(contentWrapper);

  return li;
}

/**
 * Decorates the news list block
 * @param {HTMLElement} block The news list block element
 */
export default async function decorate(block) {
  const nrOfItems = parseInt(block.children?.[0]?.children?.[0].innerText);

  try {
    const news = await fetchNews();

    const ul = document.createElement('ul');
    ul.classList.add('news-list');
    const shownNews = isNaN(nrOfItems) ? news : news.slice(0, nrOfItems);
    shownNews.forEach((newsItem) => {
      const li = createNewsElement(newsItem);
      ul.append(li);
    });

    block.textContent = '';
    block.append(ul);
  } catch (error) {
    block.textContent = 'Unable to load news';
    console.error(error)
  }
}