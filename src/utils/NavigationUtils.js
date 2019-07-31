const navigationTo = ({ idUser, prop, path }) => {
  if (idUser !== undefined && path !== undefined) {
    prop.history.push(`/users/${path}/${idUser}`);
  } else if (idUser === undefined && path !== undefined) {
    prop.history.push(`/users/${path}`);
  } else if (idUser === undefined && path === undefined) {
    prop.history.push('/users');
  } else {
    prop.history.push(`/users/${idUser}`);
  }
};

const goBack = (propsUser) => (
  propsUser.history.goBack()
);


export {
  goBack,
  navigationTo,
};
