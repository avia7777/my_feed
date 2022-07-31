export const getFromRSS = async () => {
    const RSS_URL = 'https://gadial.net/feed.xml';
    
    let response = await fetch(RSS_URL);
    response = await response.text();
    const data = new window.DOMParser().parseFromString(response, "text/xml");
    // console.log(data);
    const entries = data.querySelectorAll("entry");
    // console.log(entries);    
    const articles = Array.from(entries, entry => ({
        title: entry.childNodes[0].textContent,
        url: entry.childNodes[1].attributes.href.nodeValue,
    }));
    // console.log(articles);
    return articles;
}

export const getArticles = async () => {
    const articlesList = await getFromRSS();
    console.log(articlesList);
    // mock:
    // const mockList = [
    //     {
    //         title: "Article 1",
    //         url: "https://www.article1.com",
    //     },
    //     {
    //         title: "Article 2",
    //         url: "https://www.article2.com",
    //     },
    //     {
    //         title: "Article 3",
    //         url: "https://www.article3.com",
    //     },
    //     {
    //         title: "Article 4",
    //         url: "https://www.article4.com",
    //     },
    //     {
    //         title: "Article 5",
    //         url: "https://www.article5.com",
    //     },
    //     {
    //         title: "Article 6",
    //         url: "https://www.article6.com",
    //     },
    //     {
    //         title: "Article 7",
    //         url: "https://www.article7.com",
    //     },
    //     {
    //         title: "Article 8",
    //         url: "https://www.article8.com",
    //     },
    //     {
    //         title: "Article 9",
    //         url: "https://www.article9.com",
    //     },
    // ];
    return articlesList;
};
