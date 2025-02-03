"use strict";(self.webpackChunkintro_lab=self.webpackChunkintro_lab||[]).push([["2462"],{7005:function(e,t,o){o.r(t),o.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"optimize/patterns","title":"\uD83D\uDCD8 Patterns Used","description":"Let\'s look at the current code that is used to retrieve a single book. You can find this code in the server/src/controllers/books.ts file.","source":"@site/docs/75-optimize/2-patterns.mdx","sourceDirName":"75-optimize","slug":"/optimize/patterns","permalink":"/intro-lab/docs/optimize/patterns","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/intro-lab/blob/main/docs/75-optimize/2-patterns.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDCD8 Intro","permalink":"/intro-lab/docs/optimize/intro"},"next":{"title":"\uD83D\uDC50 Optimize the Query","permalink":"/intro-lab/docs/optimize/optimize"}}'),i=o("5893"),s=o("65");let r={},a="\uD83D\uDCD8 Patterns Used",l={},d=[{value:"Available books - computed",id:"available-books---computed",level:2},{value:"Reviews - subset",id:"reviews---subset",level:2},{value:"Author - extended reference",id:"author---extended-reference",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"-patterns-used",children:"\uD83D\uDCD8 Patterns Used"})}),"\n",(0,i.jsxs)(t.p,{children:["Let's look at the current code that is used to retrieve a single book. You can find this code in the ",(0,i.jsx)(t.code,{children:"server/src/controllers/books.ts"})," file."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"    public async getBook(bookId: string): Promise<Book> {\n        /**\n         * Initial Code\n         * Task: Optimise the query to take advantage of the already computed field.\n         * Hint: Take a look at the shape of the Book documents using MongoDB Compass.\n         */\n        const books = await collections?.books?.aggregate<Book>([\n            {\n                $match: {\n                    _id: bookId\n                },\n            },\n            {\n                $lookup: {\n                    from: 'issueDetails',\n                    localField: '_id',\n                    foreignField: 'book._id',\n                    pipeline: [\n                        {\n                            $match: {\n                                $or: [\n                                    { recordType: 'reservation' },\n                                    { recordType: 'borrowedBook', returned: false }\n                                ]\n                            }\n                        }\n                    ],\n                    as: 'details'\n                }\n            },\n            {\n                $set: {\n                    available: {\n                        $subtract: ['$totalInventory', { $size: '$details' }]\n                    }\n                }\n            },\n            {\n                $unset: 'details'\n            },\n        ]).toArray();\n\n        if (!books?.length) {\n            return;\n        }\n\n        return books[0];\n    }\n"})}),"\n",(0,i.jsx)(t.p,{children:"That's a lot of code! That's because the developer who wrote this used MongoDB just like a relational database. Let's break it down into a few pieces."}),"\n",(0,i.jsx)(t.p,{children:"First, it uses an aggregation pipeline. Don't worry too much about this \u2014 you'll learn more about it this afternoon."}),"\n",(0,i.jsxs)(t.p,{children:["The first stage uses a ",(0,i.jsx)(t.code,{children:"$match"})," stage to filter the documents by the ",(0,i.jsx)(t.code,{children:"_id"})," field. This is the equivalent of a ",(0,i.jsx)(t.code,{children:"WHERE"})," clause in SQL. This operation is really fast because the ",(0,i.jsx)(t.code,{children:"_id"})," field is indexed automatically."]}),"\n",(0,i.jsxs)(t.p,{children:["The second stage uses a ",(0,i.jsx)(t.code,{children:"$lookup"})," stage to join the ",(0,i.jsx)(t.code,{children:"issueDetails"})," collection to the ",(0,i.jsx)(t.code,{children:"books"})," collection. This is the equivalent of a ",(0,i.jsx)(t.code,{children:"JOIN"})," in SQL. This operation is really slow because it has to scan the entire ",(0,i.jsx)(t.code,{children:"issueDetails"})," collection to find the matching documents. It could be improved by adding an index on the ",(0,i.jsx)(t.code,{children:"bookId"})," field of the ",(0,i.jsx)(t.code,{children:"issueDetails"})," collection, but too many indexes can consume valuable resources."]}),"\n",(0,i.jsx)(t.p,{children:"The third and fourth stages compute the number of available books by subtracting the number of issued books from the total inventory."}),"\n",(0,i.jsx)(t.p,{children:"At this point, we also have to do additional queries to display the first five reviews for a book and the author information. This means that we have to do three queries to display a single book."}),"\n",(0,i.jsx)(t.p,{children:"Let's look at patterns that we can apply here to improve the performance of this query."}),"\n",(0,i.jsx)(t.h2,{id:"available-books---computed",children:"Available books - computed"}),"\n",(0,i.jsx)(t.p,{children:"The first thing we can do is to compute the number of available books when we insert or update a book. This way, we don't have to compute it every time we retrieve a book."}),"\n",(0,i.jsx)(t.p,{children:"Now that we have this computed field, we don't need all the later stages of the aggregation pipeline, and we can directly query the book collection."}),"\n",(0,i.jsx)(t.h2,{id:"reviews---subset",children:"Reviews - subset"}),"\n",(0,i.jsx)(t.p,{children:"For the reviews, we know that our users generally only look at the top five reviews. We can store the top five reviews in the book document and only query the reviews collection when we need to display more reviews."}),"\n",(0,i.jsx)(t.h2,{id:"author---extended-reference",children:"Author - extended reference"}),"\n",(0,i.jsx)(t.p,{children:"For the author information, instead of storing only the author id, we can store the id, along with the author name. This way, we don't have to query the authors collection to display the author name."})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},65:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return r}});var n=o(7294);let i={},s=n.createContext(i);function r(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);