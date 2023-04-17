"use strict";

const baseurl = '/kitty-rants/';

const categories = {
	'Kingdom Hearts': 'An inconsistent chronicle on an inconsistent series of games'
};

const rants = [
	{
		title: 'Birth by Sleep, part 1',
		file: 'kh-bbs-p1.md',
		uri: 'birth-by-sleep-part-1',
		category: 'Kingdom Hearts',
		description: 'The beginning of Birth by Sleep and my first forray into the part of the series I\'ve no prior experience with. Excitement and confusion abounds!',
		date: new Date('2022-09-08')
	},
	{
		title: 'Birth by Sleep, part 2',
		file: 'kh-bbs-p2.md',
		uri: 'birth-by-sleep-part-2',
		category: 'Kingdom Hearts',
		description: 'Getting into Ventus\'s part of the game and properly finding my bearings mechanically while floundering to come to grips with the metaphysics',
		date: new Date('2022-09-12')
	},
	{
		title: 'Birth by Sleep, part 3',
		file: 'kh-bbs-p3.md',
		uri: 'birth-by-sleep-part-3',
		category: 'Kingdom Hearts',
		description: 'Making my way through Aqua\'s story, the last third of the main game. The usual mixture of things I like and things that greatly baffle me ensue',
		date: new Date('2022-09-16')
	},
	{
		title: 'Birth by Sleep, part 4',
		file: 'kh-bbs-p4.md',
		uri: 'birth-by-sleep-part-4',
		category: 'Kingdom Hearts',
		description: 'Rounding out the Birth by Sleep playthrough with a lethal dosage of grinding to get the secret ending and sharing my overall thoughts of the game',
		date: new Date('2022-09-29')
	},
	{
		title: 'Re:Coded, part 1',
		file: 'kh-rc-p1.md',
		uri: 're-coded-part-1',
		category: 'Kingdom Hearts',
		description: 'The series reaches new heights in terms of bizarre narrative decisions and ludicrous world-building. Give it up for Re:Coded everyone!',
		date: new Date('2022-10-02')
	},
	{
		title: 'Re:Coded, part 2',
		file: 'kh-rc-p2.md',
		uri: 're-coded-part-2',
		category: 'Kingdom Hearts',
		description: 'The exciting conclusion to this not-quite-a-movie and the introduction of the plot point that originally killed my interest in the series for about ten years!',
		date: new Date('2022-10-08')
	},
	{
		title: 'Dream Drop Distance, part 1',
		file: 'kh-ddd-p1.md',
		uri: 'dream-drop-distance-part-1',
		category: 'Kingdom Hearts',
		description: 'Once more, I find myself overwhelmed by strange new mechanics in this next handheld entry in the series which features a constant ticking clock element!',
		date: new Date('2022-10-08 12:00:00')
	},
	{
		title: 'Dream Drop Distance, part 2',
		file: 'kh-ddd-p2.md',
		uri: 'dream-drop-distance-part-2',
		category: 'Kingdom Hearts',
		description: 'Two relatively short updates, covering only the Hunchback of Notre Dame world from both Sora\'s and Riku\'s perspectives',
		date: new Date('2022-10-11')
	},
	{
		title: 'Dream Drop Distance, part 3',
		file: 'kh-ddd-p3.md',
		uri: 'dream-drop-distance-part-3',
		category: 'Kingdom Hearts',
		description: 'I cover everything leading up to the last world only to stop the update short before what I was actually going to talk about to temporarily save my sanity',
		date: new Date('2022-11-02')
	},
	{
		title: 'Dream Drop Distance, part 4',
		file: 'kh-ddd-p4.md',
		uri: 'dream-drop-distance-part-4',
		category: 'Kingdom Hearts',
		description: 'This it is, the actual moment Kingdom Hearts truly snaps and breaks off into utter nonsense, locking itself into what would eventually become Kingdom Hearts III',
		date: new Date('2022-11-07')
	},
	{
		title: 'Kingdom Hearts 0.2',
		file: 'kh-02.md',
		uri: 'kingdom-hearts-02',
		category: 'Kingdom Hearts',
		description: 'A short and sweet return to relative normalcy after the spiraling insanity of everything that\'s been happening since Kingdom Hearts II',
		date: new Date('2022-11-14')
	},
	{
		title: 'Kingdom Hearts χ, part 1',
		file: 'kh-chi-p1.md',
		uri: 'kingdom-hearts-chi-part-1',
		category: 'Kingdom Hearts',
		description: 'Here is my attempt at building a tower from the pile of sand that is the story of the first iteration of Kingdom Hearts χ and Back Cover',
		date: new Date('2022-11-20')
	},
	{
		title: 'Kingdom Hearts χ, part 2',
		file: 'kh-chi-p2.md',
		uri: 'kingdom-hearts-chi-part-2',
		category: 'Kingdom Hearts',
		description: 'Things somehow get simultaneously both more and less clear as we go on as the story sees how many mystery boxes it can juggle at once',
		date: new Date('2022-12-14')
	},
	{
		title: 'Kingdom Hearts III, part 1',
		file: 'kh-3-p1.md',
		uri: 'kingdom-hearts-iii-part-1',
		category: 'Kingdom Hearts',
		description: 'The playthrough project finally reaches the infamous third numbered entry of the series and the quest to figure out what went wrong begins',
		date: new Date('2023-03-01')
	},
	{
		title: 'Kingdom Hearts III, part 2',
		file: 'kh-3-p2.md',
		uri: 'kingdom-hearts-iii-part-2',
		category: 'Kingdom Hearts',
		description: 'The extent of the disapointment is laid bare at last and an attempt is made at the impossible task of drawing some kind of conclusion from it all',
		date: new Date('2023-03-30')
	}
];

function updateMeta(content) {
	const title = (content.title ? content.title + ' | ' : '') + 'Kitty Rants';

	document.title = title
	document.head.querySelector('meta[property="og:title"]').setAttribute('content', title);
	document.head.querySelector('meta[property="og:description"]').setAttribute('content', content.description ?? 'A dumping ground for reckless verbiage and confused babblings');
	document.head.querySelector('meta[property="og:url"]').setAttribute('content', location.origin + location.pathname);
	document.head.querySelector('meta[property="og:type"]').setAttribute('content', content.type ?? 'website');

	document.head.querySelector('link[rel="canonical"]')?.remove();

	if (content.canonical) {
		const canonical = document.createElement('link');
		canonical.rel = 'canonical';
		canonical.href = content.canonical;

		document.head.appendChild(canonical);
	}

	document.head.querySelector('script[type="application/ld+json"]')?.remove();

	if (content.jsonLD) {
		const jsonLD = document.createElement('script');
		jsonLD.type = 'application/ld+json';
		jsonLD.innerHTML = content.jsonLD;

		document.head.appendChild(jsonLD);
	}
}

const mainElement = document.querySelector('main');
const navElement = document.querySelector('nav');

const reducedMotion = matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

const dtf = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'long', day: 'numeric'});

function getArticle(uri) {
	return new Promise(resolve => {
		const rant = rants.find(rant => baseurl + rant.uri === uri);

		if (rant) {
			const request = new Request(baseurl + 'rants/' + rant.file);

			fetch(request).then(response => {
				if (!response.ok) {
					errorPage();

					resolve(true);
				} else {
					document.title = rant.title + ' | Kitty Rants';

					let content = '<article><header><h1>' + rant.title.replace(/,(.*?)$/, ' <small>$1</small>') + '</h1>';
					let dateString = dtf.format(rant.date);

					switch (rant.date.getDate() % 10) {
						case '1':
							dateString = dateString.replace(/^(\d+)/, '$1st of');
							break;
						case '2':
							dateString = dateString.replace(/^(\d+)/, '$1nd of');
							break;
						case '3':
							dateString = dateString.replace(/^(\d+)/, '$1rd of');
							break;
						default:
							dateString = dateString.replace(/^(\d+)/, '$1th of');
					}

					content += '<p class="timestamp">A ' + rant.category + ' rant, written <time datetime="' + rant.date.toISOString().slice(0, 10) + '">' + dateString + '</time></p></header>';

					response.text().then(text => {
						let sectionIndex = 0;

						content += text.trim()
							.replaceAll(/^a>\s(.*)/gm, '<aside><p>$1</p></aside>')
							.replaceAll(/^(#{1,6})\s(.*)/gm, (match, p1, p2) => '<section><h' + p1.length + '>' + p2 + '</h' + p1.length + '>')
							.replaceAll('<section>', match => (sectionIndex++ ? '</section>' : '') + match)
							.replaceAll(/^([^<\n].*)/gm, '<p>$1</p>')
							.replaceAll(/^<p>(.+?)<\/p>\n{2,}/gm, '<p class="spacer">$1</p>')
							.replaceAll(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
							.replaceAll(/\*(.*?)\*/g, '<em>$1</em>');

						if (sectionIndex) {
							content += '</section>';
						}

						const description = rant.description ?? (text.substring(0, text.lastIndexOf(' ', 160)).replaceAll(/^>\s/gm, '').replace(/\*/, '') + '…');

						updateMeta({
							title: rant.title,
							description: description,
							type: 'article',
							canonical: location.origin + rant.uri,
							jsonLD: JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'BlogPosting',
								headline: rant.title,
								datePublished: rant.date.toISOString(),
								dateCreated: rant.date.toISOString(),
								description: description,
								author: [
									{
										'@type': 'Person',
										name: 'DoomKitty3000',
										url: 'https://github.com/Ashenfactory'
									}
								],
								url: location.origin + rant.uri
							}),
						});

						content += '</article>';

						const categoryRants = rants.filter(categoryRant => categoryRant.category === rant.category);

						if (categoryRants.length > 1) {
							categoryRants.sort((a, b) => a.date - b.date);

							const rantIndex = categoryRants.findIndex(categoryRant => categoryRant.uri === rant.uri);

							content += '<nav class="footer-navigation">';

							if (rantIndex > 0) {
								content += '<a rel="prev" href="' + baseurl + categoryRants[rantIndex - 1].uri + '"><small>Previous Rant</small><span>' + categoryRants[rantIndex - 1].title + '</span></a>';
							}

							if (rantIndex < categoryRants.length - 1) {
								content += '<a rel="next" href="' + baseurl + categoryRants[rantIndex + 1].uri + '"><small>Next Rant</small><span>' + categoryRants[rantIndex + 1].title + '</span></a>';
							}

							content += '</nav>';
						}

						mainElement.dataset.page = 'article';
						mainElement.innerHTML = content + '</article><footer><a class="top-link" href="#top">Back to top?</a></footer>';

						mainElement.classList.remove('loading');

						resolve(true);
					});

					navElement.innerHTML = '<ol><li><a href="' + baseurl + '">Kitty Rants</a></li><li><a href="' + baseurl + '#' + rant.category.toLowerCase().replaceAll(' ', '-') + '">' + rant.category + '</a></li><li aria-current="page">' + rant.title + '</li></ol>';

				}
			});
		} else {
			errorPage();

			resolve(true);
		}
	});
}

function errorPage() {
	updateMeta({
		title: 'Error!'
	});

	mainElement.dataset.page = 'error';
	navElement.innerHTML = '<ol><li><a href="' + baseurl + '">Kitty Rants</a></li><li aria-current="page">Error</li></ol>';
	mainElement.innerHTML = '<h1>Rant not found!</h1><p>It seems like I\'ve got nothing to say on <em>that</em> matter yet. Or maybe I used to, but then changed my mind later on?</p><p>At any rate, you can try going to the <a href="' + baseurl + '">frontpage</a> to see if anything there catches your fancy.</p>';

	mainElement.classList.remove('loading');
}

function frontPage() {
	updateMeta({
		canonical: location.origin + location.pathname
	});

	let content = '<h1>Kitty Rants</h1>';

	rants.sort((a, b) => a.category.localeCompare(b.category) || b.date - a.date);

	const latestRant = rants.reduce((a, b) => a.date > b.date ? a : b);

	content += '<section><h2>Latest Rant</h2><article><h3><a href="' + baseurl + latestRant.uri + '">' + latestRant.title + '</a></h3><time class="timestamp" datetime="' + latestRant.date.toISOString() + '">' + dtf.format(latestRant.date) + '</time>' + (latestRant.description ? '<p>' + latestRant.description + '</p>' : '') + '</article>';

	let currentCategory;

	rants.forEach(rant => {
		if (currentCategory !== rant.category) {
			currentCategory = rant.category;
			content += '</section><section id="' + currentCategory.toLowerCase().replaceAll(' ', '-') + '"><h2>' + currentCategory + '</h2>';

			if (categories[currentCategory]) {
				content += '<p class="lead">' + categories[currentCategory] + '</p>';
			}
		}

		content += '<article><h3><a href="' + baseurl + rant.uri + '">' + rant.title + '</a></h3><time class="timestamp" datetime="' + rant.date.toISOString().slice(0, 10) + '">' + dtf.format(rant.date) + '</time>' + (rant.description ? '<p>' + rant.description + '</p>' : '') + '</article>';
	});

	mainElement.dataset.page = 'frontpage';
	mainElement.innerHTML = content += '</section><footer><a class="top-link" href="#top">Back to top?</a></footer>';
	navElement.innerHTML = '<ol><li aria-current="page">Kitty Rants</li></ol>';

	mainElement.classList.remove('loading');
}

function setPage(uri, state = null, initial = false) {
	mainElement.classList.add('loading');
	mainElement.innerHTML = '';

	if (uri === baseurl) {
		frontPage();

		if (initial) {
			scroll(0, sessionStorage.getItem('scrollpos') ?? 0);
		} else {
			scroll(0, state?.scrollY ?? 0);
		}
	} else {
		getArticle(uri).then(() => {
			if (initial) {
				scroll(0, sessionStorage.getItem('scrollpos') ?? 0);
			} else {
				scroll(0, state?.scrollY ?? 0);
			}
		});
	}
}

setPage(location.pathname, null, true);

addEventListener('popstate', (event, state) => {
	setPage(location.pathname, event.state)
});

document.addEventListener('click', event => {
	if (event.target.tagName === 'A' && event.target.host === location.host) {
		event.preventDefault();

		if (event.target.classList.contains('top-link')) {
			scroll({top: 0, left: 0, behavior: reducedMotion ? 'auto' : 'smooth'});
		} else {
			const differentPage = event.target.pathname !== location.pathname;

			history.replaceState({scrollY: scrollY}, null, location.href);

			if (differentPage) {
				history.pushState(null, null, event.target.href);
				setPage(event.target.pathname);
			}

			if (event.target.hash) {
				document.querySelector(event.target.hash).scrollIntoView({behavior: (reducedMotion || differentPage) ? 'auto' : 'smooth'});
			} else {
				scroll(0, 0);
			}
		}

	}

});

addEventListener('beforeunload', () => {
	sessionStorage.setItem('scrollpos', scrollY);
});