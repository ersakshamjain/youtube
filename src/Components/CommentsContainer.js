import React from "react";

const commentData = [
  {
    name: "Saksham Jain",
    text: "This website build by Saksham Jain ",
    replies: [{
        name: "Saksham Jain",
        text: "This website build by Saksham Jain ",
        replies: [{
            name: "Saksham Jain",
            text: "This website build by Saksham Jain ",
            replies: [],
          },{
            name: "Saksham Jain",
            text: "This website build by Saksham Jain ",
            replies: [{
                name: "Saksham Jain",
                text: "This website build by Saksham Jain ",
                replies: [{
                    name: "Saksham Jain",
                    text: "This website build by Saksham Jain ",
                    replies: [],
                  },],
              },{
                name: "Saksham Jain",
                text: "This website build by Saksham Jain ",
                replies: [{
                    name: "Saksham Jain",
                    text: "This website build by Saksham Jain ",
                    replies: [{
                        name: "Saksham Jain",
                        text: "This website build by Saksham Jain ",
                        replies: [],
                      },],
                  },{
                    name: "Saksham Jain",
                    text: "This website build by Saksham Jain ",
                    replies: [{
                        name: "Saksham Jain",
                        text: "This website build by Saksham Jain ",
                        replies: [],
                      },{
                        name: "Saksham Jain",
                        text: "This website build by Saksham Jain ",
                        replies: [],
                      },],
                  },],
              },],
          },],
      },{
        name: "Saksham Jain",
        text: "This website build by Saksham Jain ",
        replies: [],
      },{
        name: "Saksham Jain",
        text: "This website build by Saksham Jain ",
        replies: [{
            name: "Saksham Jain",
            text: "This website build by Saksham Jain ",
            replies: [],
          },{
            name: "Saksham Jain",
            text: "This website build by Saksham Jain ",
            replies: [],
          },{
            name: "Saksham Jain",
            text: "This website build by Saksham Jain ",
            replies: [],
          },],
      },],
  },
  {
    name: "Saksham Jain",
    text: "This website build by Saksham Jain ",
    replies: [
      {
        name: "Saksham Jain",
        text: "This website build by Saksham Jain ",
        replies: [],
      },
      {
        name: "Saksham Jain",
        text: "This website build by Saksham Jain ",
        replies: [],
      },
    ],
  },
  {
    name: "Saksham Jain",
    text: "This website build by Saksham Jain ",
    replies: [
      {
        name: "Saksham Jain",
        text: "This website build by Saksham Jain ",
        replies: [
          {
            name: "Saksham Jain",
            text: "This website build by Saksham Jain ",
            replies: [
              {
                name: "Saksham Jain",
                text: "This website build by Saksham Jain ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Saksham Jain",
        text: "This website build by Saksham Jain ",
        replies: [],
      },
    ],
  },
  {
    name: "Saksham Jain",
    text: "This website build by Saksham Jain ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2  bg-gray-100 rounded-lg shadow-sm my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <div className="px-3">
        <p className="font-bold text-lg">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
    <Comment  data={comment} />
  
  <div className="pl-5 ml-5 border border-l-black">
  <CommentList comments={comment.replies}/>
  
  </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
