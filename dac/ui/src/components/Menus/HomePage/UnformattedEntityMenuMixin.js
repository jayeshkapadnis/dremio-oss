/*
 * Copyright (C) 2017 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Menu from '../Menu';
import MenuItemLink from '../MenuItemLink';

export default function(input) {
  Object.assign(input.prototype, { // eslint-disable-line no-restricted-properties
    render() {
      const { entity, closeMenu } = this.props;
      return (
        <Menu>
          {
            <MenuItemLink
              href={entity.getIn(['links', 'self'])}
              text={la('Browse Contents')}
              closeMenu={closeMenu}/>
          }
          {
            <MenuItemLink
              href={this.getHrefForFormatSettings()}
              text={la('Add Format')}
              closeMenu={closeMenu}/>
          }
        </Menu>
      );
    }
  });
}
