'use client';

import {withProps} from '@udecode/cn';
import {createPlugins, Plate, PlateElement, PlateLeaf, RenderAfterEditable} from '@udecode/plate-common';
import {createParagraphPlugin, ELEMENT_PARAGRAPH} from '@udecode/plate-paragraph';
import {
    createHeadingPlugin,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6
} from '@udecode/plate-heading';
import {createBlockquotePlugin, ELEMENT_BLOCKQUOTE} from '@udecode/plate-block-quote';
import {
    createCodeBlockPlugin,
    ELEMENT_CODE_BLOCK,
    ELEMENT_CODE_LINE,
    ELEMENT_CODE_SYNTAX
} from '@udecode/plate-code-block';
import {createHorizontalRulePlugin, ELEMENT_HR} from '@udecode/plate-horizontal-rule';
import {createLinkPlugin, ELEMENT_LINK} from '@udecode/plate-link';
import {createListPlugin, ELEMENT_LI, ELEMENT_OL, ELEMENT_UL} from '@udecode/plate-list';
import {createCaptionPlugin} from '@udecode/plate-caption';
import {createMentionPlugin, ELEMENT_MENTION, ELEMENT_MENTION_INPUT} from '@udecode/plate-mention';
import {createTablePlugin, ELEMENT_TABLE, ELEMENT_TD, ELEMENT_TH, ELEMENT_TR} from '@udecode/plate-table';
import {
    createBoldPlugin,
    createCodePlugin,
    createItalicPlugin,
    createStrikethroughPlugin,
    createSubscriptPlugin,
    createSuperscriptPlugin,
    createUnderlinePlugin,
    MARK_BOLD,
    MARK_CODE,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_SUBSCRIPT,
    MARK_SUPERSCRIPT,
    MARK_UNDERLINE
} from '@udecode/plate-basic-marks';
import {createFontBackgroundColorPlugin, createFontColorPlugin, createFontSizePlugin} from '@udecode/plate-font';
import {createHighlightPlugin, MARK_HIGHLIGHT} from '@udecode/plate-highlight';
import {createKbdPlugin, MARK_KBD} from '@udecode/plate-kbd';
import {createAlignPlugin} from '@udecode/plate-alignment';
import {createIndentPlugin} from '@udecode/plate-indent';
import {createLineHeightPlugin} from '@udecode/plate-line-height';
import {createBlockSelectionPlugin} from '@udecode/plate-selection';
import {createComboboxPlugin} from '@udecode/plate-combobox';
import {createEmojiPlugin} from '@udecode/plate-emoji';
import {createExitBreakPlugin, createSoftBreakPlugin} from '@udecode/plate-break';
import {createNodeIdPlugin} from '@udecode/plate-node-id';
import {createResetNodePlugin} from '@udecode/plate-reset-node';
import {createDeletePlugin} from '@udecode/plate-select';
import {createTabbablePlugin} from '@udecode/plate-tabbable';
import {createTrailingBlockPlugin} from '@udecode/plate-trailing-block';

import {BlockquoteElement} from '@/components/plate-ui/blockquote-element';
import {CodeBlockElement} from '@/components/plate-ui/code-block-element';
import {CodeLineElement} from '@/components/plate-ui/code-line-element';
import {CodeSyntaxLeaf} from '@/components/plate-ui/code-syntax-leaf';
import {HrElement} from '@/components/plate-ui/hr-element';
import {LinkElement} from '@/components/plate-ui/link-element';
import {LinkFloatingToolbar} from '@/components/plate-ui/link-floating-toolbar';
import {HeadingElement} from '@/components/plate-ui/heading-element';
import {ListElement} from '@/components/plate-ui/list-element';
import {MentionElement} from '@/components/plate-ui/mention-element';
import {MentionInputElement} from '@/components/plate-ui/mention-input-element';
import {MentionCombobox} from '@/components/plate-ui/mention-combobox';
import {ParagraphElement} from '@/components/plate-ui/paragraph-element';
import {TableElement} from '@/components/plate-ui/table-element';
import {TableRowElement} from '@/components/plate-ui/table-row-element';
import {TableCellElement, TableCellHeaderElement} from '@/components/plate-ui/table-cell-element';
import {CodeLeaf} from '@/components/plate-ui/code-leaf';
import {HighlightLeaf} from '@/components/plate-ui/highlight-leaf';
import {KbdLeaf} from '@/components/plate-ui/kbd-leaf';
import {Editor} from '@/components/plate-ui/editor';
import {FixedToolbar} from '@/components/plate-ui/fixed-toolbar';
import {FixedToolbarButtons} from '@/components/plate-ui/fixed-toolbar-buttons';
import {FloatingToolbar} from '@/components/plate-ui/floating-toolbar';
import {FloatingToolbarButtons} from '@/components/plate-ui/floating-toolbar-buttons';
import {EmojiCombobox} from '@/components/plate-ui/emoji-combobox';
import {TooltipProvider} from "@/components/plate-ui/tooltip";

const plugins = createPlugins(
    [
        createParagraphPlugin(),
        createHeadingPlugin(),
        createBlockquotePlugin(),
        createCodeBlockPlugin(),
        createHorizontalRulePlugin(),
        createLinkPlugin({
            renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
        }),
        createListPlugin(),
        createCaptionPlugin({
            options: {
                pluginKeys: [
                    // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
                ]
            },
        }),
        createMentionPlugin(),
        createTablePlugin(),
        createBoldPlugin(),
        createItalicPlugin(),
        createUnderlinePlugin(),
        createStrikethroughPlugin(),
        createCodePlugin(),
        createSubscriptPlugin(),
        createSuperscriptPlugin(),
        createFontColorPlugin(),
        createFontBackgroundColorPlugin(),
        createFontSizePlugin(),
        createHighlightPlugin(),
        createKbdPlugin(),
        createAlignPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
                    ],
                },
            },
        }),
        createIndentPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
                    ],
                },
            },
        }),
        createLineHeightPlugin({
            inject: {
                props: {
                    defaultNodeValue: 1.5,
                    validNodeValues: [1, 1.2, 1.5, 2, 3],
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
                    ],
                },
            },
        }),
        createBlockSelectionPlugin({
            options: {
                sizes: {
                    top: 0,
                    bottom: 0,
                },
            },
        }),
        createComboboxPlugin(),
        createEmojiPlugin({
            renderAfterEditable: EmojiCombobox,
        }),
        createExitBreakPlugin({
            options: {
                rules: [
                    {
                        hotkey: 'mod+enter',
                    },
                    {
                        hotkey: 'mod+shift+enter',
                        before: true,
                    },
                    {
                        hotkey: 'enter',
                        query: {
                            start: true,
                            end: true,
                            // allow: KEYS_HEADING,
                        },
                        relative: true,
                        level: 1,
                    },
                ],
            },
        }),
        createNodeIdPlugin(),
        createResetNodePlugin({
            options: {
                rules: [
                    // Usage: https://platejs.org/docs/reset-node
                ],
            },
        }),
        createDeletePlugin(),
        createSoftBreakPlugin({
            options: {
                rules: [
                    {hotkey: 'shift+enter'},
                    {
                        hotkey: 'enter',
                        query: {
                            allow: [
                                // ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD
                            ],
                        },
                    },
                ],
            },
        }),
        createTabbablePlugin(),
        createTrailingBlockPlugin({
            options: {type: ELEMENT_PARAGRAPH},
        }),
    ],
    {
        components: {
            [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
            [ELEMENT_CODE_BLOCK]: CodeBlockElement,
            [ELEMENT_CODE_LINE]: CodeLineElement,
            [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
            [ELEMENT_HR]: HrElement,
            [ELEMENT_LINK]: LinkElement,
            [ELEMENT_H1]: withProps(HeadingElement, {variant: 'h1'}),
            [ELEMENT_H2]: withProps(HeadingElement, {variant: 'h2'}),
            [ELEMENT_H3]: withProps(HeadingElement, {variant: 'h3'}),
            [ELEMENT_H4]: withProps(HeadingElement, {variant: 'h4'}),
            [ELEMENT_H5]: withProps(HeadingElement, {variant: 'h5'}),
            [ELEMENT_H6]: withProps(HeadingElement, {variant: 'h6'}),
            [ELEMENT_UL]: withProps(ListElement, {variant: 'ul'}),
            [ELEMENT_OL]: withProps(ListElement, {variant: 'ol'}),
            [ELEMENT_LI]: withProps(PlateElement, {as: 'li'}),
            [ELEMENT_MENTION]: MentionElement,
            [ELEMENT_MENTION_INPUT]: MentionInputElement,
            [ELEMENT_PARAGRAPH]: ParagraphElement,
            [ELEMENT_TABLE]: TableElement,
            [ELEMENT_TR]: TableRowElement,
            [ELEMENT_TD]: TableCellElement,
            [ELEMENT_TH]: TableCellHeaderElement,
            [MARK_BOLD]: withProps(PlateLeaf, {as: 'strong'}),
            [MARK_CODE]: CodeLeaf,
            [MARK_HIGHLIGHT]: HighlightLeaf,
            [MARK_ITALIC]: withProps(PlateLeaf, {as: 'em'}),
            [MARK_KBD]: KbdLeaf,
            [MARK_STRIKETHROUGH]: withProps(PlateLeaf, {as: 's'}),
            [MARK_SUBSCRIPT]: withProps(PlateLeaf, {as: 'sub'}),
            [MARK_SUPERSCRIPT]: withProps(PlateLeaf, {as: 'sup'}),
            [MARK_UNDERLINE]: withProps(PlateLeaf, {as: 'u'}),
        },
    }
);

const initialValue = [
    {
        id: '1',
        type: 'p',
        children: [{text: 'Hello, World!'}],
    },
];

export function PlateEditor() {
    return (
        <TooltipProvider>
            <Plate initialValue={initialValue}>
                <FixedToolbar>
                    <FixedToolbarButtons/>
                </FixedToolbar>

                <Editor/>

                <FloatingToolbar>
                    <FloatingToolbarButtons/>
                </FloatingToolbar>
                <MentionCombobox items={[]}/>
            </Plate>
        </TooltipProvider>
    );
}