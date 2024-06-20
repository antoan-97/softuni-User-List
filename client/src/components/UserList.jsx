import Search from "./Search";
import Table from "./Teble";

export default function UserList(props) {
    return (
        <section className="card users-container">
            <Search />
            <Table />
        </section>
    );
}