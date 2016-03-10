import React from "react";
import ReactCSS from "reactcss";
import color from "color";
import colors from "../shared/colors";

export default class AlertMessage extends ReactCSS.Component {
  displayName = "AlertMessage";

  static propTypes = {
    body: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array]).isRequired,
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(["success", "info", "warning", "danger"]).isRequired
  };

  displayContent () {
    if (Array.isArray(this.props.body)) {
      let _data = this.props.body;
      return (<ul style={this.styles().list}>
      {_data.map(function(object, i){
        return (<li
            className={"li"}
            key={i}
                >{[ object]}
        </li>);
      })}
      </ul>);
    } else {
      return this.props.body
    }

  }

  classes () {
    return {
      "default": {
        AlertMessage: {
          color: "#fff",
          fontSize: 16,
          padding: "2%",
          textAlign: "center",
          width: "96%"
        },
        title: {
          fontWeight: "bold",
          display: "inlineBlock",
          marginRight: "5px"
        },
        list: {
          listStyle: "square",
          textAlign: "left"
        }
      },
      "success": {
        AlertMessage: {
          backgroundColor: colors.success,
          border: "1px solid " + color(colors.success).darken(0.1).hexString()
        }
      },
      "info": {
        AlertMessage: {
          backgroundColor: colors.info,
          border: "1px solid " + color(colors.info).darken(0.1).hexString()
        }
      },
      "warning": {
        AlertMessage: {
          backgroundColor: colors.warning,
          border: "1px solid " + color(colors.warning).darken(0.1).hexString()
        }
      },
      "danger": {
        AlertMessage: {
          backgroundColor: colors.danger,
          border: "1px solid " + color(colors.danger).darken(0.1).hexString()
        }
      }
    }
  }

  styles () {
    return this.css({
      "success": this.props.type === "success",
      "info": this.props.type === "info",
      "warning": this.props.type === "warning",
      "danger": this.props.type === "danger",
      "title": "title"
    })
  }

  render () {
    return (
        <div
            role="alert"
            style={this.styles().AlertMessage}
        ><span style={this.styles().title}>{this.props.title}</span>{this.displayContent()}
        </div>
    );
  }
};