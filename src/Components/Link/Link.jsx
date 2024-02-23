

const Link = ({ route }) => {
    return (
        <li className="mr-4 hover:bg-purple-400">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;