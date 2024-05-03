import Card, { CardItemType } from "./Card";

export type CardPropsType = {
    results: CardItemType[];
};
export default function Cards(props: CardPropsType) {
    const { results } = props;
    console.log(props);
    return (
        <>
            {results.map((item: CardItemType, i: number) => (
                <Card key={item.id} item={item} />
            ))}
        </>
    );
}
