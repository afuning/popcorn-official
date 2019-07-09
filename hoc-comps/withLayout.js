import Header from '../comps/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = WrappedComponent => {
  const withLayoutComponent = (props) => (
    <div style={layoutStyle}>
      <Header />
      <WrappedComponent {...props}/>
    </div>
  );
  if(WrappedComponent.getInitialProps) {
    withLayoutComponent.getInitialProps = WrappedComponent.getInitialProps
  }
  return withLayoutComponent
};

export default withLayout;