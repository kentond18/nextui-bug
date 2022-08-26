import { Button, Link, Navbar, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";

type Props = {};

const MainNav = (props: Props) => {
	const { isDark } = useTheme();

	const collapseItems = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Advertising",
			href: "/advertising",
		},
		{
			label: "How It Works",
			href: "/how-it-works",
		},
		{
			label: "Products",
			href: "/products",
		},
	];

	return (
		<Navbar isBordered={isDark}>
			<Navbar.Brand>
				<Navbar.Toggle
					aria-label="Toggle navigation"
					css={{
						pb: "0.5rem",
					}}
					showIn="sm"
				/>
				<NextLink passHref href="/">
					<Text
						h2
						css={{
							paddingLeft: "1rem",
						}}
					>
						Test Site
					</Text>
				</NextLink>
			</Navbar.Brand>
			<Navbar.Content hideIn={"sm"}>
				<Navbar.Link href="/">Home</Navbar.Link>
				<Navbar.Link href="/advertising">Advertising</Navbar.Link>
				<Navbar.Link href="/how-it-works">How It Works</Navbar.Link>
				<Navbar.Link href="/products">Products</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Link href="/login">Login</Navbar.Link>
				<Navbar.Item>
					<Button auto flat as={Link} href="/signup">
						Sign Up
					</Button>
				</Navbar.Item>
			</Navbar.Content>
			<Navbar.Collapse>
				{collapseItems.map((item) => (
					<Navbar.CollapseItem key={item.href}>
						<NextLink href={item.href}>{item.label}</NextLink>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNav;
