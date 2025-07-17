import { PortableText } from "@portabletext/react";
import { ArbitraryTypedObject, PortableTextBlock } from "@portabletext/types";

export function RichText({
  value,
}: {
  value: PortableTextBlock | ArbitraryTypedObject;
}) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          h1: ({ children }) => (
            <h1 className="text-3xl font-racing mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-racing mt-6 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>
          ),
          normal: ({ children }) => (
            <p className="mb-4 text-gray-300">{children}</p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-red-600 pl-4 my-6 text-gray-400 italic">
              {children}
            </blockquote>
          ),
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
        },
      }}
    />
  );
}
