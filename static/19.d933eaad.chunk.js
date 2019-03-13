webpackJsonp([19],{1160:function(e,n,t){var a=t(0),l=t(65),o=t(14).PageRenderer;o.__esModule&&(o=o.default);var i=l({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1185)}},componentWillMount:function(){},render:function(){return a.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},1185:function(e,n){e.exports='There are few composable components available for constructing the Calendar View\n\n### DayTile\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: noBorderRadius\n    Type: boolean\n    Default: \'`false`\'\n    Notes: Determines whether the DayTile container needs a border-radius\n  - Prop: ...props\n    Type: any\n    Default:\n    Notes: Passes through any other props to underlying HTML element\n```\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile />\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile noBorderRadius />\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                  <DayTileItem.Label variant="positive">\n                    ON SALE: TUE \u2022 JAN 29 \u2022 5 PM\n                  </DayTileItem.Label>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTileDate\n\n`<DayTile.Header />` is recommended to use as a wrapper for the `<DayTileDate />` to achieve proper styling of the `<DayTile />`\'s header content\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: accent\n    Type: boolean\n    Default: \'`false`\'\n    Notes: Determines the styling of the underlying `<Text />` component. Can be used in order to bring user\'s attention to the `<DayTile />`\'s content\n```\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n          <DayTileDate>10</DayTileDate>\n      </Spacing>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n          <DayTileDate accent>10</DayTileDate>\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate>10</DayTileDate>\n          </DayTile.Header>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTileItem\n\n`<DayTileItem.Group />` is recommended for use to wrap one or multiple `<DayTileItem />`s together\n\nUse `<DayTileItem.Header />` with `<DayTileOverflowButton />` in order to achieve proper layout when no thumbnail available. Otherwise move the `<DayTileOverflowButton />` inside the `<DayTileItem.Content />` next to the `<DayTileItem.ContentColumn />`.\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: highlighted\n    Type: boolean\n    Default: \'`false`\'\n    Notes: Determines whether the DayTileItem needs to be highlighted\n  - Prop: ...props\n    Type: any\n    Default:\n    Notes: Passes through any other props to underlying HTML element\n```\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTileItem.Group>\n          <DayTileItem>\n            <DayTileItem.Header>\n              <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n            </DayTileItem.Header>\n            <DayTileItem.Content>\n              <DayTileItem.ContentColumn>\n                <DayTileItem.Title>\n                  Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                </DayTileItem.Title>\n              </DayTileItem.ContentColumn>\n            </DayTileItem.Content>\n            <DayTileItem.Footer>\n              <DayTileButton.Group>\n                <DayTileButton href="#">2:00 pm</DayTileButton>\n                <DayTileButton href="#">6:00 pm</DayTileButton>\n              </DayTileButton.Group>\n              <DayTileMoreButton\n                role="button"\n                onClick={() => {\n                  alert(\'More Button Clicked\');\n                }}\n              >\n                +4 More\n              </DayTileMoreButton>\n            </DayTileItem.Footer>\n          </DayTileItem>\n        </DayTileItem.Group>\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem highlighted>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/ba0/2b25e192-d7cb-4987-b7ce-aca1638a5ba0_818611_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Talib Kweli"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Talib Kweli\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    Hip-Hop/Rap\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTileButton\n\n`<DayTileButton.Group />` is recommended for use to wrap one or multiple `<DayTileButton />`s together.\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: ...props\n    Type: any\n    Default:\n    Notes: Passes through any other props to underlying `<Button />`\n```\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={6}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTileButton.Group>\n          <DayTileButton href="#">2:00 pm</DayTileButton>\n          <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>\n        </DayTileButton.Group>\n      </Spacing>\n    </Column>\n    <Column medium={6}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTileMoreButton\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: ...props\n    Type: any\n    Default:\n    Notes: Passes through any other props to underlying `<Link />`\n```\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={6}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTileMoreButton\n          role="button"\n          onClick={() => alert(\'More Button clicked\')}\n        >\n          + 4 More\n        </DayTileMoreButton>\n      </Spacing>\n    </Column>\n    <Column medium={6}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => alert(\'More Button clicked\')}\n                >\n                  + 4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTileOverflowButton\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: ...props\n    Type: any\n    Default:\n    Notes: Passes through any other props to underlying `<IconButton />`\n```\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button clicked\')} />\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button clicked\')} />\n              </DayTileItem.Header>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={4}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/1ba/522a6d18-d42a-4cbd-a716-e763e5d261ba_549571_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Dallas Cowboys"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn />\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTile variations\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate>10</DayTileDate>\n          </DayTile.Header>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    On Sale: Fri, 08/17/18 10:00 AM\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>\n                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTile (with image)\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/1ba/522a6d18-d42a-4cbd-a716-e763e5d261ba_549571_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Dallas Cowboys"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    vs. Dallas Cowboys\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    Away\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Ms. Lauryn Hill and Dave Chappelle\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    R&B\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Ms. Lauryn Hill and Dave Chappelle\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    R&B\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Ms. Lauryn Hill and Dave Chappelle\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    R&B\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>\n                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n\n### DayTile (multiple items)\n\n```react\n---\n<Container>\n  <Row>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    On Sale: Fri, 08/17/18 10:00 AM\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n    <Column medium={3}>\n      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>\n        <DayTile>\n          <DayTile.Header>\n            <DayTileDate accent>10</DayTileDate>\n          </DayTile.Header>\n          <DayTileItem.Group>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Ms. Lauryn Hill and Dave Chappelle\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    R&B\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>\n                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n            <DayTileItem>\n              <ResponsiveImage\n                src="https://www.ticketmaster.com/new/compressedimages/dam/a/ba0/2b25e192-d7cb-4987-b7ce-aca1638a5ba0_818611_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"\n                width={320}\n                height={180}\n                alt="Talib Kweli"\n              />\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Talib Kweli\n                  </DayTileItem.Title>\n                  <DayTileItem.SubTitle>\n                    Hip-Hop/Rap\n                  </DayTileItem.SubTitle>\n                </DayTileItem.ContentColumn>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                </DayTileButton.Group>\n              </DayTileItem.Footer>\n            </DayTileItem>\n            <DayTileItem>\n              <DayTileItem.Header>\n                <DayTileOverflowButton aria-label="More Info" onClick={() => alert(\'Overflow Button Clicked\')} />\n              </DayTileItem.Header>\n              <DayTileItem.Content>\n                <DayTileItem.ContentColumn>\n                  <DayTileItem.Title>\n                    Henderson, NV \u2014 Sunset Station Outdoor Amphitheater\n                  </DayTileItem.Title>\n                </DayTileItem.ContentColumn>\n              </DayTileItem.Content>\n              <DayTileItem.Footer>\n                <DayTileButton.Group>\n                  <DayTileButton href="#">2:00 pm</DayTileButton>\n                  <DayTileButton href="#">6:00 pm</DayTileButton>\n                </DayTileButton.Group>\n                <DayTileMoreButton\n                  role="button"\n                  onClick={() => {\n                    alert(\'More Button Clicked\');\n                  }}\n                >\n                  +4 More\n                </DayTileMoreButton>\n              </DayTileItem.Footer>\n            </DayTileItem>\n          </DayTileItem.Group>\n        </DayTile>\n      </Spacing>\n    </Column>\n  </Row>\n</Container>\n```\n'}});
//# sourceMappingURL=19.d933eaad.chunk.js.map