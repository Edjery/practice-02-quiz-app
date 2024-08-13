export default (list: any, numItems: number) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
};