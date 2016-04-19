import React from "react";
import ReactCSS from "reactcss";
import color from "color";
import { Map } from "immutable";
import { TextColors } from "../shared/colors";

export default class List extends ReactCSS.Component {
  static displayName = "List";

  static propTypes = {
    children: React.PropTypes.node,
  };

  classes() {
    return {
      default: {
        List: {
          border: `1px solid ${color(TextColors.dark).lighten(1.5).hexString()}`,
        },
      },
    };
  }

  renderChildren() {
    this.listItemRefs = new Map();
    return React.Children.map(this.props.children, (child, i) => {
      if (child) {
        const lenChildren = this.props.children.length;
        let listPosition;
        if (lenChildren > 0) {
          switch (i) {
            case 0:
              listPosition = "first";
              break;
            case lenChildren - 1:
              listPosition = "last";
              break;
            default:
              listPosition = "middle";
              break;
          }
        }
        return React.cloneElement(child, {
          listPosition,
          ref: c => {
            this.listItemRefs = this.listItemRefs.set(i, c);
          },
        });
      }
      return null;
    });
  }

  render() {
    return (
      <div style={this.styles().List}>
        {this.renderChildren()}
      </div>
    );
  }
}
