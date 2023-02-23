import React from 'react';
import { useSelector } from 'react-redux';
import AddPostss from './adminCases/AddPosts';
import PostList from './adminCases/PostList';
import { RootState } from '../../store';
import DescriptionCardList from './adminAboutUs/DescriptionList';
import AddDescription from './adminAboutUs/AddDescription';
import NewsList from './adminNews/NewsList';
import AddPostsNews from './adminNews/AddNews';

export default function AdminPage(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.users);
  return (
    <>
      <center>
        <div
          className="container"
          style={{
            backgroundColor: 'white',
            border: 'black 1px solid',
            marginTop: '7rem',
            marginBottom: '3rem',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
        >
          {'userName' in user && <AddPostss />}
          <div>{'userName' in user && <PostList />}</div>
        </div>
      </center>

      <center>
        <div
          className="container"
          style={{
            backgroundColor: 'white',
            border: 'black 1px solid',
            marginTop: '1rem',
            marginBottom: '3rem',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
        >
          {'userName' in user && <AddDescription />}

          <div>{'userName' in user && <DescriptionCardList />}</div>
        </div>
      </center>

      <center>
        <div
          className="container"
          style={{
            backgroundColor: 'white',
            border: 'black 1px solid',
            marginTop: '1rem',
            marginBottom: '3rem',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
        >
          {'userName' in user && <AddPostsNews />}
          <br />
          <br />
          <div>{'userName' in user && <NewsList />}</div>
        </div>
      </center>
    </>
  );
}
