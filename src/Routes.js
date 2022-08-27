import React, { lazy, Suspense, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Loading } from "./components/Loading";
import { AuthContext } from "./context/AuthContext";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const PageAuth = lazy(() => import("./pages/pageAuth"));
const PageAdmin = lazy(() => import("./pages/pageAdmin"));
const PageNotFound = lazy(() => import("./pages/pageNotFound"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ModuloEmocional = lazy(() => import("./pages/ModuloEmocional"));
const ModuloPiensalo = lazy(() => import("./pages/ModuloPiensalo"));
const ModuloRelax = lazy(() => import("./pages/ModuloRelax"));
const ModuloAutoevaluativo = lazy(() => import("./pages/ModuloAutoevaluativo"));
const ModuloAlternativo = lazy(() => import("./pages/ModuloAlternativo"));
const EmailRecover = lazy(() => import("./pages/EmailRecover"));
const PasswordReset = lazy(() => import("./pages/PasswordReset"));
const ResultadosAutoevaluativo = lazy(() =>
  import("./pages/AutoevaluativoResultados")
);

const LoadingFallback = () => <Loading />;

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  // //console.log(auth.isAuthenticated())
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? children : <Redirect to="/login" />
      }
    />
  );
};

const LoginRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? <Redirect to="/dashboard" /> : children
      }
    />
  );
};

const AdminRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() && auth.isAdmin() ? (
          <div>{children}</div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const AppRoutes = () => (
  <>
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <LoginRoute path="/login">
          <Login />
        </LoginRoute>

        <LoginRoute path="/sign-up">
          <SignUp />
        </LoginRoute>

        <Route path="/recover">
          <EmailRecover />
        </Route>

        <Route path="/reset">
          <PasswordReset />
        </Route>

        <AuthenticatedRoute path="/dashboard">
          <Dashboard />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/autoevaluativo">
          <ModuloAutoevaluativo />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/autoevaluativo_resultados">
          <ResultadosAutoevaluativo />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/emocional:slug">
          <ModuloEmocional />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/relax:slug">
          <ModuloRelax />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/piensalo:slug">
          <ModuloPiensalo />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/alternativo:slug">
          <ModuloAlternativo />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/auth">
          <PageAuth />
        </AuthenticatedRoute>

        <AdminRoute path="/admin">
          <PageAdmin />
        </AdminRoute>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </>
);

export default AppRoutes;
