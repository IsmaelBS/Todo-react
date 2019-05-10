import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favoriteActions from "../../store/actions/favorite";
import propTypes from "prop-types";

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: propTypes.func.isRequired,
    favorites: propTypes.shape({
      loading: propTypes.bool.isRequired,
      data: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.number,
          url: propTypes.string,
          name: propTypes.string,
          description: propTypes.string
        })
      ).isRequired
    })
  };

  state = {
    repositoryInput: ""
  };

  handleAddRepo = e => {
    e.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
    this.setState({ repositoryInput: "" });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepo}>
          <input
            type="text"
            value={this.state.repositoryInput}
            onChange={e => {
              this.setState({ repositoryInput: e.target.value });
            }}
            placeholder="Usuário/repositório"
          />
          <button>Adicionar</button>
          {this.props.favorites.loading && <span>Carregando...</span>}
        </form>

        <ul>
          {this.props.favorites.data.map(fav => (
            <li key={fav.id}>
              <p>
                <strong> {fav.name}</strong> {fav.description}
              </p>
              <a href={fav.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(favoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
