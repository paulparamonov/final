import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { commentContext } from "../../contexts/commentContext";
import { useAuth } from "../../contexts/authContext";

const Comments = ({id}) => {
  const {user: {email}} = useAuth();
  const { getComments, deleteComment, comments } = useContext(commentContext);
  useEffect(() => {
    getComments(id);
  }, [id]);
  return (
    <List
      className="demo-loadmore-list items-list"
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item
    
        style={{border:"2px solid white" , marginBottom:"8px" , borderRadius:"8px"}}
          actions={email === "sereuspro94@gmail.com"?[
            <button key="list-loadmore-edit" onClick={() => deleteComment(item.id, id)}>
              delete
            </button>,
          ]:null}

        >
          <List.Item.Meta
            
            title={<p style={{color:"whitesmoke" }}>{<p>{{email}? 
       <span>{item.email}</span>
           : 
          <span>Гость</span>}</p>}{item.comment}</p>}
          />
        </List.Item>
      )}
    />
  );
};

export default Comments;
