import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UsersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => String(user.id) === String(userId));

    

    return (
        <span>
            by {author ? author.name : 'Unknown User'}
        </span>
    );
};

export default PostAuthor;
